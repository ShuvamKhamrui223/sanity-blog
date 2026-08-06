export function slugify( content:string ) {
  return content.toLocaleLowerCase().replaceAll(" ", "-");
}

export const formatDate = ({ dateStr }: { dateStr: string }) =>
  new Date(dateStr).toLocaleDateString(undefined, {
    dateStyle: "medium",
  });