import { getLatestPosts } from "@/lib/data-fetching";
import ArticleCard from "../cards/article-card";

const LatestFeed = async () => {
  const { data } = await getLatestPosts();
  return (
    <section className="app-container px-page-margin ">
      <h2>The Latest Stories</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.map((singlePost) => (
          <ArticleCard key={singlePost.slug} content={singlePost} />
        ))}
      </div>
    </section>
  );
};

export default LatestFeed;
