export function slugify({ content }: { content: string }) {
    return content.toLocaleLowerCase().replaceAll(" ", "-")
}