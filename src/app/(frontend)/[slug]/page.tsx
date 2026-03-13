import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import Author from "@/components/ui/author";
import { components } from "@/sanity/components/portable-text";
import CommentForm from "@/components/forms/comment-form";
import CommentsList from "@/components/ui/comments-list";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: await params,
  });
  return {
    title: post?.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: await params,
  });
  const postImageUrl = post?.mainImage
    ? urlFor(post?.mainImage)?.width(550).height(310).url()
    : null;

  if (!post) {
    return notFound();
  }
  return (
    <section className="min-h-screen max-w-7xl mx-auto flex flex-col gap-8">
      <h1 className="text-5xl font-bold max-w-[45ch]">{post.title}</h1>
      {post?.author !== null ? (
        <Author authorContent={post.author} publisheDate={post.publishedAt} />
      ) : null}
      {postImageUrl && (
        <div className="w-full h-140 relative rounded-2xl overflow-hidden">
          <Image
            src={postImageUrl}
            alt={post?.title || "post cover image"}
            className="aspect-video object-cover"
            fill
          />
        </div>
      )}
      <div className="prose prose-green dark:prose-invert md:prose-lg max-w-5xl prose-img:rounded-2xl prose-img:w-full mx-auto py-10">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={components} />
        )}
      </div>

      <CommentForm postId={post._id} />

      <CommentsList comments={post.comments} />
    </section>
  );
}
