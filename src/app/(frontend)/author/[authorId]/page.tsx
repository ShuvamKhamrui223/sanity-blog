import PageBanner from "@/components/ui/sections/author-page/page-banner";
import ProfileCard from "@/components/ui/cards/profile-card";
import { getAuthorDetails, getPostsByAuthorSlug } from "@/lib/data-fetching";
import { urlFor } from "@/sanity/lib/image";
import { POSTS_BY_AUTHOR_SLUG_QUERYResult } from "@/sanity/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SubscriptionOnlyOverlay from "@/components/ui/subscription-only-overlay";
import UserActionButton from "@/components/ui/buttons/user-action-button";

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
      <section className="max-w-7xl mx-auto space-y-gutter">
        <header className="flex justify-between items-end my-10 border-b border-outline-variant pb-4">
          <h2>Published Articles</h2>
        </header>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {data.map((post) => (
            <AuthorArticleCard key={post.slug} post={post} />
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
        <div className="w-full md:w-1/2 h-70 overflow-hidden relative rounded">
          {post.contentTier === "subscribers-only" ? (
            <SubscriptionOnlyOverlay />
          ) : null}
          {cardCoverImageUrl ? (
            <Image
              src={cardCoverImageUrl}
              alt={
                post.mainImage?.alt || `Article cover image for ${post.title}`
              }
              fill
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-500"
            />
          ) : null}
        </div>
        <div className="flex-1 py-2 px-4">
          <h3>
            <Link href={`/article/${post.slug}`}>{post.title}</Link>
          </h3>
          <UserActionButton slug={post.slug} />
        </div>
      </div>
    </article>
  );
};
