import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

const { projectId, dataset } = client.config();
// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? ImageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

const options = { next: { revalidate: 30 } };

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
  // const postImageUrl = post?.mainImage
  //   ? urlFor(post?.mainImage)?.width(550).height(310).url()
  //   : null;

  if (!post) {
    return notFound();
  }
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {/* {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post?.title || "post cover image"}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )} */}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose-lg prose-zinc leading-12">
        <p>
          Published:{" "}
          {post.publishedAt !== null
            ? new Date(post.publishedAt).toLocaleDateString()
            : null}
        </p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
