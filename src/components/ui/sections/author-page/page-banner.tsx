import { urlFor } from "@/sanity/lib/image";
import { AUTHOR_DETAILS_QUERYResult } from "@/sanity/types";
import Image from "next/image";

const PageBanner = ({
  bannerImage,
}: {
  bannerImage?: NonNullable<AUTHOR_DETAILS_QUERYResult>["coverImage"];
}) => {
  return (
    <>
      <section className="w-full h-100 relative overflow-hidden">
        {bannerImage ? (
          <Image
            alt="Workspace Banner"
            loading="lazy"
            fill
            className="w-full h-full object-cover"
            src={urlFor(bannerImage).width(1200).height(400).url()}
          />
        ) : (
          <Image
            alt="Workspace Banner"
            loading="lazy"
            className="w-full h-full object-cover"
            src={"/banner-placeholder.jpeg"}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
      </section>
    </>
  );
};

export default PageBanner;
