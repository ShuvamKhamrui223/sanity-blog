import { defineField, defineType } from "sanity";

export const commentType = defineType({
    name: "comment",
    title: "Comments",
    type: "document",
    fields: [
        defineField({
            name: "fullName",
            title: "full name",
            type: "string",
        }),
        defineField({
            name: "approved", title: "Approved",
            type: "boolean",
            initialValue: false,
            description: "Comments won't show on the website until the author approves"
        }),
        defineField({
            name: "email",
            title: "Email address",
            type: "string",
            validation: (rule) => rule.required().error("email is required")
        }),
        defineField({
            name: "message",
            title: "User response",
            type: "text",
            validation: (rule) => rule.required().error("message is required")
        }),
        defineField({
            name: "post",
            type: "reference",
            to: [{ type: "post" }]
        }),
    ]
})