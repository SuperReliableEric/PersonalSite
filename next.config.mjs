/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true // use the Rust MDX compiler that Turbopack supports
  }
};

export default nextConfig;
