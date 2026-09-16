import { readFileSync } from "node:fs";
import { DocsPage } from "../components/docs";
import { Markdown, processMarkdown } from "../components/markdown";

export const path = "/changelog";
export const title = "Changelog";
export const description = "Release notes for every published version of Varde.";

const changelogPath = `${import.meta.dir}/../../../CHANGELOG.md`;
const raw = readFileSync(changelogPath, "utf-8").replace(/^#\s+Changelog\s*\n/, "");
const html = await processMarkdown(raw);

export default function ChangelogPage() {
  return (
    <DocsPage title={title} description={description}>
      <Markdown html={html} />
    </DocsPage>
  );
}
