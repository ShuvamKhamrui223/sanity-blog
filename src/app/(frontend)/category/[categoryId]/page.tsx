import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";

const page = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const {categoryId}=await params
  const { data } = await sanityFetch({
    query: POSTS_BY_CATEGORY_QUERY,
    params: {categoryId: categoryId},
  });

  return (
    <div>
      {/* {await params.categoryId} */}
      {categoryId}
      {JSON.stringify(data)}
    </div>
  );
};

export default page;
