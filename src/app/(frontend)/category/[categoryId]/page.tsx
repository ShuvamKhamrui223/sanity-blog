import AsymetricArticleGrid from "@/components/ui/sections/asymetric-article-grid";
import { getPostsByCategorySlug } from "@/lib/data-fetching";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}): Promise<Metadata> {
  const { categoryId } = await params;
  const { data } = await getPostsByCategorySlug(categoryId);

  if (!data) {
    return {
      title: "Category not found",
    };
  }

  return {
    title: `Top ${data.length} articles for ${categoryId}`,
  };
}

const page = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const { data } = await getPostsByCategorySlug(categoryId);
  const dl = data.length;
  return (
    <>
      <h1>
        {dl} {dl > 1 ? "articles" : "article"} found in {categoryId}
      </h1>

      <AsymetricArticleGrid articles={data} />
    </>
  );
};

export default page;
