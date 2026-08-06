import { getAllAuthors } from "@/lib/data-fetching";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const TopWriters = async () => {
  const { data: authors } = await getAllAuthors();
  return (
    <section className="app-container">
      <div className="flex justify-between items-end mb-stack-md">
        <h2>Curated Voices</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {authors.map((author) => (
          <div
            key={author.slug}
            className="flex flex-col items-center text-center border border-outline-variant hover:bg-surface-container-low transition-colors"
          >
            {author.thumbnailUrl ? (
              <div className="w-12/12 h-80 bg-surface-container overflow-hidden relative mb-4 outline-2 outline-primary/20">
                <Image
                  src={urlFor(author.thumbnailUrl).width(100).height(100).url()}
                  alt={`Profile picture of ${author.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className="py-6">
              <h3>
                <Link href={`/author/${author.slug}`}>{author.name}</Link>
              </h3>

              <button className="font-label-ui text-label-ui border border-primary text-primary px-4 py-1 hover:bg-primary hover:text-on-primary transition-all">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopWriters;
