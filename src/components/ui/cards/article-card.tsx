import { urlFor } from "@/sanity/lib/image";
import { ALL_POSTS_QUERYResult } from "@/sanity/types";
import { BookmarkAddOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import SubscriptionOnlyOverlay from "../subscription-only-overlay";
interface ArticleCardProps {
  content: ALL_POSTS_QUERYResult[0];
}
const ArticleCard = ({ content }: ArticleCardProps) => {
  return (
    <article key={content?.slug} className="group relative">
      <div className="group flex flex-col md:flex-row gap-8 items-start outline-1 outline-outline-variant">
        <>
          <div className="w-1/2 h-70 overflow-hidden relative rounded">
            {content.contentTier === "subscribers-only" ? (
              <SubscriptionOnlyOverlay />
            ) : null}
            {content.mainImage ? (
              <Image
                src={urlFor(content.mainImage)
                  .width(300)
                  .height(250)
                  .quality(80)
                  .auto("format")
                  .url()}
                alt={
                  content.mainImage?.alt ||
                  `Article cover image for ${content.title}`
                }
                fill
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-500"
              />
            ) : null}
          </div>
        </>
        <div className="flex-1 py-4 px-2">
          <div className="flex items-center gap-2  text-[11px] text-on-surface-variant mb-2 uppercase tracking-widest">
            <Link href={`/category/${content.categories?.[0].slug?.current}`}>
              <span>{content.categories?.[0].title}</span>
            </Link>
            <span>•</span>
            <span>
              {content.publishedAt
                ? new Date(content.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Date not available"}
            </span>
          </div>
          <h3>
            {content.contentTier === "subscribers-only" ? (
              <Link href={`/article/${content.slug}`}>{content.title}</Link>
            ) : (
              <Link href={`/article/${content.slug}`}>{content.title}</Link>
            )}
          </h3>

          <button className="material-symbols-outlined text-secondary hover:text-primary">
            <BookmarkAddOutlined suppressHydrationWarning />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
