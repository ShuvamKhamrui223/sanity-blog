import ArticleContent from "@/components/ui/sections/article-Content";
import ArticleHeader from "@/components/ui/sections/article/article-header";
import MoreFromAuthor from "@/components/ui/sections/article/more-from-author";
import { getPostBySlug } from "@/lib/data-fetching";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// export async function generateStaticParams() {
//   const { data } = await getLatestPosts();
//   if (data)
//     return data.map((post) => ({
//       slug: post?.slug,
//     }));
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getPostBySlug(slug);

  return {
    title: data?.title,
    category: data?.categories?.[0].title ?? "",
    openGraph: {
      title: data?.title ?? "",
      type: "article",
      url: `https://www.example.com/article/${slug}`,
    },
  };
}
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { data } = await getPostBySlug(slug);
  if (!data) {
    return notFound();
  }
  return (
    <>
      {data != null ? (
        <ArticleHeader
          author={data.author}
          category={data.categories}
          publishedAt={data.publishedAt}
          title={data.title}
          mainImage={data.mainImage}
        />
      ) : null}

      <ArticleContent content={data.body} />

      {data.author?.slug !== null && data.author?.slug !== undefined ? (
        <Suspense fallback={"Loading more articles"}>
          <MoreFromAuthor authorId={data.author?.slug.current} />
        </Suspense>
      ) : null}
    </>
  );
};

export default page;
