import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

type PostEntry = {
  slug: string;
  dateDir: string;
  filePath: string;
};

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  dateReadable: string;
  description: string;
  readingTime: string;
};

type ModuleMeta = {
  title?: string;
  date?: string;
  description?: string;
};

async function findPosts(): Promise<PostEntry[]> {
  const dateDirs = await fs.readdir(postsDirectory, { withFileTypes: true });
  const entries: PostEntry[] = [];

  // Nested structure: /blog/<date>/<slug>/content.mdx
  for (const dateDir of dateDirs) {
    if (!dateDir.isDirectory()) continue;
    const datePath = path.join(postsDirectory, dateDir.name);
    const slugDirs = await fs.readdir(datePath, { withFileTypes: true });

    for (const slugDir of slugDirs) {
      if (!slugDir.isDirectory()) continue;
      const filePath = path.join(datePath, slugDir.name, 'content.mdx');
      try {
        await fs.access(filePath);
        entries.push({ slug: slugDir.name, dateDir: dateDir.name, filePath });
      } catch {
        // ignore missing content.mdx
      }
    }
  }

  // Flat files: /blog/<slug>.mdx (backward compatibility)
  for (const file of dateDirs) {
    if (file.isFile() && file.name.endsWith('.mdx')) {
      entries.push({
        slug: file.name.replace(/\.mdx?$/, ''),
        dateDir: '',
        filePath: path.join(postsDirectory, file.name)
      });
    }
  }

  return entries;
}

async function loadModuleMeta(entry: PostEntry): Promise<ModuleMeta | null> {
  try {
    if (entry.dateDir) {
      const mod = await import(`@/content/blog/${entry.dateDir}/${entry.slug}/content.mdx`);
      // mdx-rs exports frontmatter as `metadata`
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (mod as any).metadata ?? null;
    }
    const mod = await import(`@/content/blog/${entry.slug}.mdx`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (mod as any).metadata ?? null;
  } catch (error) {
    console.warn('Missing metadata export for', entry.slug, error);
    return null;
  }
}

async function toMeta(entry: PostEntry, source: string, moduleMeta?: ModuleMeta | null): Promise<PostMeta> {
  const fm = matter(source);
  const data = moduleMeta ?? (fm.data as ModuleMeta);
  const content = fm.content || source;
  const dateValue = data?.date ? new Date(data.date) : entry.dateDir ? new Date(entry.dateDir) : new Date();

  return {
    slug: entry.slug,
    title: data?.title ?? entry.slug,
    date: data?.date ?? dateValue.toISOString(),
    dateReadable: dateValue.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    description: data?.description ?? '',
    readingTime: readingTime(content).text
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await findPosts();
  const posts = await Promise.all(
    entries.map(async (entry) => {
      const source = await fs.readFile(entry.filePath, 'utf8');
      const moduleMeta = await loadModuleMeta(entry);
      return toMeta(entry, source, moduleMeta);
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<{ meta: PostMeta; content: string; entry: PostEntry }> {
  const entries = await findPosts();
  const entry = entries.find((item) => item.slug === slug);
  if (!entry) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const source = await fs.readFile(entry.filePath, 'utf8');
  const moduleMeta = await loadModuleMeta(entry);
  const meta = await toMeta(entry, source, moduleMeta);
  const { content } = matter(source);
  return { meta, content: content || source, entry };
}

export async function getPostModule(slug: string) {
  const entries = await findPosts();
  const entry = entries.find((item) => item.slug === slug);
  if (!entry) {
    throw new Error(`Post module not found for slug: ${slug}`);
  }

  if (entry.dateDir) {
    return import(`@/content/blog/${entry.dateDir}/${entry.slug}/content.mdx`);
  }

  return import(`@/content/blog/${entry.slug}.mdx`);
}

export async function getAllPostSlugs(): Promise<string[]> {
  const entries = await findPosts();
  return entries.map((entry) => entry.slug);
}
