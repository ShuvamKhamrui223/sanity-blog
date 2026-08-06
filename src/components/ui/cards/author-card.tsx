import { urlFor } from "@/sanity/lib/image";
import { POST_BY_SLUG_QUERYResult } from "@/sanity/types";
import Image from "next/image";

interface AuthorCardProps {
  authorCardData: NonNullable<POST_BY_SLUG_QUERYResult>["author"];
}

const AuthorCard = ({ authorCardData }: AuthorCardProps) => {
  const authorImageUrl = authorCardData?.image
    ? urlFor(authorCardData.image)?.width(550).height(310).url()
    : null;

  return (
    <section className="mt-stack-lg pt-12 border-t border-outline-variant">
      <div className="bg-surface-container p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start">
        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-surface-container-lowest">
          {authorImageUrl ? (
            <div className="relative size-10 rounded-full overflow-hidden">
              <Image
                src={authorImageUrl}
                alt={`Profile picture of ${authorCardData?.name}`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative size-5 bg-zinc-800 p-4 rounded-full">
              <Image
                src={"/user.svg"}
                alt={`User profile image of ${authorCardData?.name}`}
                fill
                className="invert scale-50"
              />
            </div>
          )}
        </div>
        <div className="grow">
          <div className="flex items-center justify-between mb-2">
            <h4>{authorCardData?.name}</h4>
              {/* <button className="border border-primary text-primary px-4 py-1 rounded-full font-label-ui text-label-ui hover:bg-primary hover:text-on-primary transition-all duration-300">
                Follow
              </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorCard;
