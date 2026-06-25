import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'new_arrival',
  title: 'New Arrival',
  type: 'document',
  fields: [
    defineField({
      name: 'newarrival_prod',
      title: 'ADD PRODUCT DETAIL',
      type: 'product',
    }),
  ],
  preview: {
    select: {
      media: 'newarrival_prod.thumbnail',
      title: 'newarrival_prod.prod_name',
    },
  },
});
