import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'featured_prod',
      title: 'ADD PRODUCT DETAIL',
      type: 'product',
    }),
  ],
  preview: {
    select: {
      media: 'featured_prod.thumbnail',
      title: 'featured_prod.prod_name',
    },
  },
});
