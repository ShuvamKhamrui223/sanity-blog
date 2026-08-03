import { POST_BY_CATEGORY_SLUG_QUERYResult } from "@/sanity/types";
import { BookmarkAddOutlined } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SubscriptionOnlyOverlay from "../subscription-only-overlay";

interface AsymetricArticleGridProps {
  articles: POST_BY_CATEGORY_SLUG_QUERYResult;
}
const AsymetricArticleGrid = ({ articles }: AsymetricArticleGridProps) => {
  return (
    <section className="app-container grid grid-cols-1 lg:grid-cols-2 gap-gutter">
      {articles.map((post) => (
        <CategoryWiseArticleCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default AsymetricArticleGrid;

const CategoryWiseArticleCard = ({
  post,
}: {
  post: POST_BY_CATEGORY_SLUG_QUERYResult[0];
}) => {
  const cardCoverImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(300).height(250).url()
    : null;
  return (
    <article className="group flex flex-col md:flex-row gap-8 items-start outline-1 outline-outline-variant">

      <>
                <div className="w-1/2 h-70 overflow-hidden relative rounded">
                  {post.contentTier === "subscribers-only" ? (
                    <SubscriptionOnlyOverlay />
                  ) : null}
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage)
                        .width(300)
                        .height(250)
                        .quality(80)
                        .auto("format")
                        .url()}
                      alt={
                        post.mainImage?.alt ||
                        `Article cover image for ${post.title}`
                      }
                      fill
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  ) : null}
                </div>
              </>
      <div className="flex-1 py-4 px-2">
        <div className="flex items-center gap-2 font-label-ui text-[11px] text-on-surface-variant mb-2 uppercase tracking-widest">
          <span>
            {post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Date not available"}
          </span>
        </div>
        <h3>
          <Link href={`/article/${post.slug}`}>{post.title}</Link>
        </h3>
        <button className="material-symbols-outlined text-secondary hover:text-primary">
          <BookmarkAddOutlined suppressHydrationWarning />
        </button>
      </div>
    </article>
  );
};
