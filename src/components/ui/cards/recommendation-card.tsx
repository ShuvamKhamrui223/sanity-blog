import { urlFor } from "@/sanity/lib/image";
import { POSTS_BY_AUTHOR_SLUG_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";

const RecommendationCard = ({
  data,
}: {
  data: POSTS_BY_AUTHOR_SLUG_QUERYResult[0];
}) => {
  return (
    <article className="group">
      {data.mainImage ? (
        <Link
          href={`/article/${data?.slug}`}
          title={`Click this link to open ${data.title} article`}
        >
          <div className="h-80 relative bg-surface-container rounded-md overflow-hidden mb-4">
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={urlFor(data.mainImage).height(100).width(150).url()}
              fill
              alt={data.mainImage.alt ?? `${data.title}`}
            />
          </div>
        </Link>
      ) : null}
      <h4>
        <Link href={`/article/${data?.slug}`}>{data?.title} </Link>
      </h4>
    </article>
  );
};

export default RecommendationCard;
