import ArticleCard from "@/components/ui/article-card";
import { getLatestPosts } from "@/lib/data-fetching";
import Link from "next/link";

export default async function Home() {
  const {data} = await getLatestPosts();
  return (
    <>
      <section className="flex flex-col gap-5">
        <h1 className="text-3xl capitalize font-bold">latest articles</h1>
        <Link href={"/studio"} target="_blank">
          visit studio
        </Link>

        {data.length === 0 ? <p>no content</p> : null}

        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <li key={item._id}>
              <ArticleCard content={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
