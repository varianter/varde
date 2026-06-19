export const knowledgeDir = `${import.meta.dir}/../../packages/knowledge/src`;

export const knowledgeFileNames = await Array.fromAsync(new Bun.Glob("*.md").scan(knowledgeDir));
