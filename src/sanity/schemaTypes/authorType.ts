import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (v) => [v.required(), v.min(3), v.max(30)],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (v) => v.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
    }),
    defineField({
      name: "profilePicture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      type: "array",
      validation: (v) => v.required(),
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: "tagline",
      type: "string",
      validation: (v) => [v.required(), v.min(5).max(40)],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
