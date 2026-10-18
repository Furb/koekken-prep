import { defineField, defineType } from "sanity";

export const ingrediens = defineType({
  name: "ingrediens",
  title: "Ingrediens",
  type: "object",

  fields: [
    defineField({
      name: "amount",
      type: "number",
    }),

    defineField({
      name: "unit",
      type: "string",
      title: "",
      options: {
        layout: "dropdown",
        list: [
          { title: "stk.", value: "stk" },
          { title: "g", value: "g" },
          { title: "kg", value: "kg" },
          { title: "ml", value: "ml" },
          { title: "dl", value: "dl" },
          { title: "l", value: "l" },
          { title: "tsk", value: "tsk" },
          { title: "spsk", value: "spsk" },
          { title: "bundt", value: "bundt" },
          { title: "dåse", value: "dase" },
        ],
      },
    }),

    defineField({
      name: "name",
      type: "string",
    }),
  ],
});
