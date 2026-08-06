import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { slugify } from "@/lib/formatter";
import UserActionButton from "../buttons/user-action-button";

interface LibraryItem {
  userId: string;
  id: string;
  postId: string;
  title: string;
  slug: string;
  imageUrl: string | null;
  category: string | null;
  publishedAt: Date;
  createdAt: Date;
}
interface LibraryContentProps {
  libraryItems: LibraryItem[] | null;
}
const LibraryContent = ({ libraryItems }: LibraryContentProps) => {
  return (
    <ul className="space-y-stack-md" id="library-container">
      {libraryItems?.map((item) => (
        <li key={item.id}>
          <LibraryCard content={item} />
        </li>
      ))}
    </ul>
  );
};

export default LibraryContent;

const LibraryCard = ({ content }: { content: LibraryItem }) => {
  return (
    <>
      <article key={content?.id} className="relative">
        <div className="group flex flex-col md:flex-row gap-8 items-start outline-1 outline-outline-variant">
          <>
            <div className="w-full md:w-1/2 h-70 overflow-hidden relative rounded">
              {content.imageUrl ? (
                <Image
                  src={urlFor(content.imageUrl)
                    .width(300)
                    .height(250)
                    .quality(80)
                    .auto("format")
                    .url()}
                  alt={`Article cover image for ${content.title}`}
                  fill
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              ) : null}
            </div>
          </>
          <div className="flex-1 py-4 px-2">
            <div className="flex items-center gap-2  text-[11px] text-on-surface-variant mb-2 uppercase tracking-widest">
              <Link href={`/category/${slugify(content?.category || "")}`}>
                <span>{content.category}</span>
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
              <Link href={`/article/${content.slug}`}>{content.title}</Link>
            </h3>

            <UserActionButton slug={content.slug} />
          </div>
        </div>
      </article>
    </>
  );
};
