export {};

declare module "*.md" {
  const content: string;
  export default content;
}

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>): Response | Promise<Response>;
    (
      content: string | Promise<string>,
      props: { title?: string; markdownPath?: string },
    ): Response | Promise<Response>;
  }
}
