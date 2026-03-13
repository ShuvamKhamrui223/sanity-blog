import { formatDate } from "@/lib/formatter";
import { urlFor } from "@/sanity/lib/image";
import type { Author, POST_BY_SLUG_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
interface AuthorProps {
  authorContent: NonNullable<POST_BY_SLUG_QUERYResult>["author"];
  publisheDate: NonNullable<POST_BY_SLUG_QUERYResult>["publishedAt"];
}
const Author = ({ authorContent, publisheDate }: AuthorProps) => {
  const authorImageUrl = authorContent?.image
    ? urlFor(authorContent.image)?.width(550).height(310).url()
    : null;

  return (
    <div className="flex items-center gap-4">
      <Link href={`/author/${authorContent?.slug?.current}`}>
        {authorImageUrl ? (
          <div className="relative size-10 rounded-full overflow-hidden">
            <Image
              src={authorImageUrl}
              alt="user profile image"
              fill
              className="object-cover"
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
      </Link>
      <div>
        <Link href={`/author/${authorContent?.slug?.current}`}>
          <p className="capitalize text-base font-semibold ">
            {authorContent?.name}
          </p>
        </Link>
        {publisheDate !== null ? (
          <p className="text-sm text-zinc-400">
            Published: {formatDate({ dateStr: publisheDate })}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Author;
