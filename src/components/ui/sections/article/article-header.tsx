import { formatDate, slugify } from "@/lib/formatter";
import { urlFor } from "@/sanity/lib/image";
import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";
import {
  BookmarkAddOutlined,
  MoreHoriz,
  ShareRounded,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import UserActionButton from "../../buttons/user-action-button";

type ArticleHeaderProps = {
  category: NonNullable<POST_BY_SLUG_QUERYResult>["categories"];
  title: NonNullable<POST_BY_SLUG_QUERYResult>["title"];
  author: NonNullable<POST_BY_SLUG_QUERYResult>["author"];
  mainImage: NonNullable<POST_BY_SLUG_QUERYResult>["mainImage"];
  publishedAt: NonNullable<POST_BY_SLUG_QUERYResult>["publishedAt"];
};

const ArticleHeader: FC<ArticleHeaderProps> = ({
  author,
  category,
  title,
  mainImage,
  publishedAt,
}) => {
  const postThumbnailUrl = mainImage
    ? urlFor(mainImage).width(1024).height(250).url()
    : null;
  const authorProfilePicUrl = author?.image
    ? urlFor(author.image).width(300).height(250).url()
    : null;

  return (
    <header className="mb-stack-md pt-4">
      <Link href={`/category/${category ? category[0].slug?.current : ""}`}>
        <span className="bg-surface-container-high px-2 py-0.5 rounded font-label-ui text-label-ui uppercase tracking-widest text-on-surface-variant">
          {category && category[0]?.title}
        </span>
      </Link>

      <h1>{title}</h1>

      <p>published on {publishedAt && formatDate({ dateStr: publishedAt })}</p>

      {/* post thumbnail */}
      <div className="w-full h-120 mt-4 rounded-xl relative overflow-hidden border border-outline-variant/20">
        {postThumbnailUrl !== null ? (
          <Image
            src={postThumbnailUrl}
            alt={mainImage?.alt || `"Post thumbnail of ${title}"`}
            fill
            loading="eager"
            className="object-cover hover:scale-105 transition-all duration-500"
          />
        ) : null}
      </div>

      <div className="flex items-center justify-between py-6 border-y border-outline-variant/30">
        <div className="flex gap-4 items-center">
          <div className="size-15 overflow-hidden relative rounded">
            {authorProfilePicUrl ? (
              <Image
                src={authorProfilePicUrl}
                alt={
                  author?.name
                    ? `Profile picture of ${author.name}`
                    : "Author profile picture"
                }
                fill
                className="object-cover"
                loading="lazy"
              />
            ) : (
              "no image"
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-headline-section text-headline-section text-on-surface">
              <Link href={`/author/${author?.slug?.current}`}>
                {author?.name}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* action buttons */}
      <div className="flex items-center gap-4 text-on-surface-variant">
        <button className="hover:text-primary transition-colors flex items-center gap-1">
          <ShareRounded />
        </button>
        <UserActionButton slug={slugify(title!)} />
      </div>
    </header>
  );
};

export default ArticleHeader;
