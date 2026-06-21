import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'featured_prod',
      title: 'Product',
      type: 'product',
    }),
  ],
});
