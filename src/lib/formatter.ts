export function slugify({ content }: { content: string }) {
    return content.toLocaleLowerCase().replaceAll(" ", "-")
}

export function formatDate({ dateStr }: { dateStr: string }) {
    const intlFormatter = new Intl.DateTimeFormat(navigator.language, {
        dateStyle: "medium"
    })
    const typedToDate = new Date(dateStr)
    return intlFormatter.format(typedToDate)
}