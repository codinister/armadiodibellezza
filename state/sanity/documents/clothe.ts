import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clothe',
  title: 'Clothe',
  type: 'document',
  fields: [
    defineField({
      name: 'clothe_prod',
      title: 'ADD PRODUCT DETAIL',
      type: 'product',
    }),

    defineField({
      name: 'clothecat',
      title: 'Category',
      type: 'reference',
      validation: Rule => Rule.required().error('Category field required!'),
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
  preview: {
    select: {
      media: 'clothe_prod.thumbnail',
      title: 'clothe_prod.prod_name',
    },
  },
});
