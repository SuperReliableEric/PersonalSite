declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';
  export const metadata: Record<string, any>;
  export default function MDXContent(props: MDXProps): JSX.Element;
}
