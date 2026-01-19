import type { MDXComponents } from 'mdx/types';

// You can extend built-in components here, e.g. customize <a>, <code>, etc.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components
  };
}
