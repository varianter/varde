export const SITE_ORIGIN = "https://varde.variant.dev";

export function withTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}
