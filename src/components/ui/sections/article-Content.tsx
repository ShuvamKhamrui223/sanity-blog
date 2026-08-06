import { PortableText } from "next-sanity";
import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";

type ArticleContentProps = NonNullable<POST_BY_SLUG_QUERYResult>["body"];
const ArticleContent = ({ content }: { content: ArticleContentProps }) => {
  return (
    <article className="text-body-main prose text-on-surface space-y-6 max-w-5xl mx-auto">
      {content
        ? Array.isArray(content) && <PortableText value={content} />
        : null}
    </article>
  );
};

export default ArticleContent;
