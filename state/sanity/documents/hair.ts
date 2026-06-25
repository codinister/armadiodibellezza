import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hair',
  title: 'Hair',
  type: 'document',
  fields: [
    defineField({
      name: 'hair_prod',
      title: 'ADD PRODUCT DETAILS',
      type: 'product',
    }),

    defineField({
      name: 'haircat',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required().error('Category field required!'),
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
  preview: {
    select: {
      media: 'hair_prod.thumbnail',
      title: 'hair_prod.prod_name',
    },
  },
});
