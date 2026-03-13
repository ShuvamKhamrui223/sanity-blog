import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <figure className="relative rounded-2xl h-120 w-full overflow-hidden flex flex-col gap-2 max-w-xl mx-auto">
          <Image
            className="object-contain"
            src={urlFor(props.value)
              .width(600)
              .height(400)
              .quality(80)
              .auto("format")
              .url()}
            alt={props?.value?.alt || ""}
            fill
          />
          {/* <figcaption className="first-letter:uppercase block text-center py-2">
            {props.value.alt}
          </figcaption> */}
        </figure>
      ) : null,
  },
};
