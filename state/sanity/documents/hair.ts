import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hair',
  title: 'Hair',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'hair_prod',
      title: 'Product',
      type: 'product',
    }),

    defineField({
      name: 'haircat',
      title: 'Category',
      type: 'reference',
      to: [
        {
          type: 'hair_cat',
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
});
