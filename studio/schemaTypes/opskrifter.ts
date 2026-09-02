import { defineField, defineType } from "sanity";

import { BookIcon } from "@sanity/icons/Book";

export const opskrifter = defineType({
  name: "opskrifter",
  title: "Opskrifter",
  type: "document",

  icon: BookIcon,
  fieldsets: [
    {
      name: "opskriftInfo",
      title: "Info",
      options: { columns: 2 },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Du skal trykke på gererate knappen for at skabe opskriften",
      options: {
        source: "title",
      },
      validation: (rule) =>
        rule
          .required()
          .error(`Du skal trykke på "gererate" for at skabe opskriften`),
    }),

    defineField({
      name: "Aktuel",
      type: "string",
      description: "Er det den nuværende version af opskriften?",
      options: {
        list: ["Aktuel", "Arkiv"],
        layout: "radio",
      },
      initialValue: "Aktuel",
    }),
    defineField({
      name: "ingredienser",
      title: "Ingredienser",
      type: "array",
      of: [{ type: "ingrediens" }],
    }),
    defineField({
      name: "metode",
      title: "Evt. metode",
      type: "text",
    }),
    defineField({
      name: "udbytte",
      title: "Udbytte",
      type: "string",
      placeholder: "f.eks 2x3L",
      fieldset: "opskriftInfo",
    }),

    defineField({
      name: "author",
      title: "Initialer",
      type: "string",
      fieldset: "opskriftInfo",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "author",
    },
  },
});
