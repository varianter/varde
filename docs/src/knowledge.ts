export const knowledgeDir = `${import.meta.dir}/../../packages/knowledge/src`;

const fileNames = await Array.fromAsync(new Bun.Glob("*.md").scan(knowledgeDir));

export type KnowledgeDoc = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

type Frontmatter = {
  title?: string;
  description?: string;
};

const FRONTMATTER = /^---\n([\s\S]*?)\n---\n?/;

function slugToTitle(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export const knowledgeDocs: KnowledgeDoc[] = (
  await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const raw: string = (await import(`${knowledgeDir}/${fileName}`, { with: { type: "text" } }))
        .default;

      const match = raw.match(FRONTMATTER);
      const yaml = match?.[1];
      const frontmatter = (yaml ? (Bun.YAML.parse(yaml) as Frontmatter | null) : null) ?? {};
      const content = match ? raw.slice(match[0].length) : raw;

      return {
        slug,
        title: frontmatter.title ?? slugToTitle(slug),
        description: frontmatter.description ?? "",
        content,
      };
    }),
  )
).sort((a, b) => a.title.localeCompare(b.title));
