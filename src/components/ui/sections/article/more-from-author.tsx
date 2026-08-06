import { getPostsByAuthorSlug } from "@/lib/data-fetching";
import RecommendationCard from "../../cards/recommendation-card";

const MoreFromAuthor = async ({ authorId }: { authorId: string }) => {
  const { data: postsOfAuthor } = await getPostsByAuthorSlug(authorId);
  return (
    <section className="mt-stack-lg pt-12 border-t border-outline-variant mb-20">
      <h3>
        More from{" "}
        <span className="capitalize">{authorId.replaceAll("-", " ")}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-12">
        {postsOfAuthor?.map((item) => (
          <RecommendationCard key={item.slug} data={item} />
        ))}
      </div>
    </section>
  );
};

export default MoreFromAuthor;
