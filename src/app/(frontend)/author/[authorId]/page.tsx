import PageBanner from "@/components/ui/sections/author-page/page-banner";
import ProfileCard from "@/components/ui/cards/profile-card";
import {
  getAuthorDetails,
  getPostsByAuthorSlug,
  getPostsByCategorySlug,
} from "@/lib/data-fetching";
import { urlFor } from "@/sanity/lib/image";
import { POSTS_BY_AUTHOR_SLUG_QUERYResult } from "@/sanity/types";
import { BookmarkAddOutlined } from "@mui/icons-material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ authorId: string }>;
}): Promise<Metadata> {
  const { authorId } = await params;
  const { data } = await getPostsByAuthorSlug(authorId);
  const dl = data.length;
  if (!data) {
    return {
      title: "Author not found",
    };
  }

  return {
    title: `${dl} ${dl > 1 ? "articles" : "article"} written by ${authorId.replaceAll("-", " ")}`,
  };
}

const page = async ({ params }: { params: Promise<{ authorId: string }> }) => {
  const { authorId } = await params;

  const { data: authorDetails } = await getAuthorDetails(authorId);
  return (
    <>
      <PageBanner bannerImage={authorDetails?.coverImage} />
      <ProfileCard profileDetails={authorDetails} />
      <Suspense fallback={<>loading articles writen by {authorId}</>}>
        <AuthorArticleGrid authorId={authorId} />
      </Suspense>
    </>
  );
};

export default page;

const AuthorArticleGrid = async ({ authorId }: { authorId: string }) => {
  const { data } = await getPostsByAuthorSlug(authorId);
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <header className="flex justify-between items-end my-10 border-b border-outline-variant pb-4">
          <h2>Published Articles</h2>
        </header>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {data.map((post) => (
            <AuthorArticleCard key={post.slug?.current} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
};
const AuthorArticleCard = ({
  post,
}: {
  post: POSTS_BY_AUTHOR_SLUG_QUERYResult[0];
}) => {
  const cardCoverImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(300).height(250).url()
    : null;
  return (
    <article className="group outline-1 outline-outline-variant">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-1/2 h-70 overflow-hidden relative rounded">
          {cardCoverImageUrl ? (
            <Image
              src={cardCoverImageUrl}
              alt={post.mainImage?.alt || "Article cover image"}
              width={300}
              height={250}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
            />
          ) : null}
        </div>
        <div className="flex-1 py-4 px-2">
          <h3>
            <Link href={`/article/${post.slug?.current}`}>{post.title}</Link>
          </h3>
          <div className="flex items-center justify-between">
            {/* <span className="font-label-ui text-[12px] text-on-surface-variant">
              8 min read
            </span> */}
          </div>
          <button className="material-symbols-outlined text-secondary hover:text-primary">
            <BookmarkAddOutlined suppressHydrationWarning />
          </button>
        </div>
      </div>
    </article>
  );
};
