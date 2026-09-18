import { readFileSync } from "node:fs";

export const knowledgeDir = `${import.meta.dir}/../../packages/knowledge/src`;

// Order controls section order on the examples index.
export const groups = {
  foundations: { label: "Foundations", order: 1 },
  motion: { label: "Motion", order: 2 },
  data: { label: "Data display", order: 3 },
  navigation: { label: "Navigation", order: 4 },
  forms: { label: "Forms & inputs", order: 5 },
  overlays: { label: "Overlays", order: 6 },
  feedback: { label: "Feedback & status", order: 7 },
} as const;

export type Group = keyof typeof groups;

const fileNames = Array.from(new Bun.Glob("**/*.md").scanSync(knowledgeDir));

export type KnowledgeDoc = {
  category: string;
  slug: string;
  title: string;
  description: string;
  order?: number;
  group?: Group;
  tags: string[];
  content: string;
};

type Frontmatter = {
  title?: string;
  description?: string;
  order?: number;
  group?: string;
  tags?: string[];
};

const FRONTMATTER = /^---\n([\s\S]*?)\n---\n?/;

export function slugToTitle(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export const knowledgeDocs: KnowledgeDoc[] = fileNames
  .map((fileName) => {
    const segments = fileName.split("/");
    const slug = (segments.pop() ?? fileName).replace(/\.md$/, "");
    const category = segments.join("/");

    const raw = readFileSync(`${knowledgeDir}/${fileName}`, "utf-8");

    const match = raw.match(FRONTMATTER);
    const yaml = match?.[1];
    let frontmatter: Frontmatter = {};
    if (yaml) {
      try {
        frontmatter = (Bun.YAML.parse(yaml) as Frontmatter | null) ?? {};
      } catch (error) {
        throw new Error(`Invalid YAML frontmatter in ${knowledgeDir}/${fileName}`, {
          cause: error,
        });
      }
    }
    let group: Group | undefined;
    if (frontmatter.group !== undefined) {
      if (!(frontmatter.group in groups)) {
        throw new Error(
          `${fileName}: unknown group "${frontmatter.group}" — valid groups: ${Object.keys(groups).join(", ")}`,
        );
      }
      group = frontmatter.group as Group;
    }

    const content = match ? raw.slice(match[0].length) : raw;

    return {
      category,
      slug,
      title: frontmatter.title ?? slugToTitle(slug),
      description: frontmatter.description ?? "",
      order: frontmatter.order,
      group,
      tags: frontmatter.tags ?? [],
      content,
    };
  })
  .sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return a.title.localeCompare(b.title);
  });
