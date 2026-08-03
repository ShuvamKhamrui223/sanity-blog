import ArticleContent from "@/components/ui/sections/article-Content";
import ArticleHeader from "@/components/ui/sections/article/article-header";
import MoreFromAuthor from "@/components/ui/sections/article/more-from-author";
import { getPostBySlug } from "@/lib/data-fetching";
import { PricingTable } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
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
  const { has, userId } = await auth();
console.log()
  const isProMember = has({ plan: "pro_tier" });

  if (!data) {
    return notFound();
  }

  if (data?.contentTier === "free-tier")
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


  if (!userId) {
    redirect("/sign-in");
  }

  if (!isProMember) {
    return (
      <>
        <div className="max-w-xl mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold">Subscriber-Only Content</h1>
          <p className="text-gray-600 mt-2 mb-6">
            This article is exclusively for Pro subscribers. Upgrade your plan
            to read the full story.
          </p>

          {/* Render Clerk's native drop-in pricing/checkout component */}
          <PricingTable />
        </div>
      </>
    );
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
