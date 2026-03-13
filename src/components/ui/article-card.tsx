import { urlFor } from "@/sanity/lib/image";
import { ALL_POSTS_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
interface ArticleCardProps {
  content: ALL_POSTS_QUERYResult[0];
}
const ArticleCard = ({ content }: ArticleCardProps) => {
  const cardCoverImageUrl = content.mainImage
    ? urlFor(content.mainImage).width(300).height(250).url()
    : null;

  const authorProfileIamgeUrl = content.author?.image
    ? urlFor(content.author.image).width(50).height(50).url()
    : null;
  return (
    <article className="duration-150 transition-all hover:brightness-125 flex flex-col">
      {cardCoverImageUrl ? (
        <Link href={`${content.slug?.current}`}>
          <figure className="relative h-72 w-full overflow-hidden rounded-2xl">
            <Image
              fill
              src={cardCoverImageUrl}
              alt="Article thumbnail description"
              className="object-cover hover:scale-105 transition-transform duration-100"
              loading="lazy"
            />
          </figure>
        </Link>
      ) : null}
      <footer className="flex flex-col gap-2 p-4">
        <ul className="flex gap-2">
          {content.categories?.slice(0, 3).map((category) => (
            <li
              key={category?.title}
              className="text-sm text-amber-500 capitalize"
            >
              {category.slug !== null ? (
                <Link href={`/category/${category?.slug.current || "/"}`}>
                  {category?.title}
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl mb-2 line-clamp-2">
          <Link href={`${content.slug?.current}`}>{content.title}</Link>
        </h2>

        <Link href={`/author/${content.author?.slug?.current}`}>
          <div className="flex items-center gap-2">
            {authorProfileIamgeUrl ? (
              <div className="size-6 rounded-full overflow-hidden relative">
                <Image
                  src={authorProfileIamgeUrl}
                  alt="user profile image"
                  fill
                  className="invert object-cover"
                />
              </div>
            ) : (
              <div className="relative size-5 bg-zinc-800 p-4 rounded-full">
                <Image
                  src={"/user.svg"}
                  alt="user profile image"
                  fill
                  className="invert scale-50"
                />
              </div>
            )}
            <p className="capitalize text-sm font-semibold ">
              {content.author?.name}
            </p>
          </div>
        </Link>
      </footer>
    </article>
  );
};

export default ArticleCard;
