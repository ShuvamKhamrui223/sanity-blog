import { ALL_POSTS_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
interface ArticleCardProps {
  content: ALL_POSTS_QUERYResult[0];
}
const ArticleCard = ({ content }: ArticleCardProps) => {
  return (
    <article className="duration-150 transition-all hover:brightness-125 flex flex-col ">
      <Link href={`${content.slug?.current}`}>
        <figure className="relative h-72 w-full overflow-hidden rounded-2xl">
          <Image
            fill
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Article thumbnail description"
            className="object-cover hover:scale-105 transition-transform duration-100"
            loading="lazy"
          />
        </figure>
      </Link>
      <footer className="flex flex-col gap-2 p-4">
        <ul className="flex gap-2">
          {content.categories?.slice(0, 3).map((category) => (
            <li
              key={category?.title}
              className="text-sm text-amber-500 capitalize"
            >
              {category.slug !== null ? (
                <Link href={`/category/${category?.slug.current || "/"}`}>
                  {category?.title}
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl mb-2">
          <Link href={`${content.slug?.current}`}>{content.title}</Link>
        </h2>

        <Link href={`/author/${content.author?.slug?.current}`}>
          <div className="flex items-center gap-2">
            <div className="relative size-5 bg-zinc-800 p-4 rounded-full">
              <Image
                src={"/user.svg"}
                alt="user profile image"
                fill
                className="invert scale-50"
              />
            </div>
            <p className="capitalize text-sm font-semibold ">
              {content.author?.name}
            </p>
          </div>
        </Link>
      </footer>
    </article>
  );
};

export default ArticleCard;
