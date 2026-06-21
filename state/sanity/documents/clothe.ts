import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clothe',
  title: 'Clothe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'clothe_prod',
      title: 'Product',
      type: 'product',
    }),

    defineField({
      name: 'clothecat',
      title: 'Category',
      type: 'reference',
      to: [
        {
          type: 'clothe_cat',
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
});
