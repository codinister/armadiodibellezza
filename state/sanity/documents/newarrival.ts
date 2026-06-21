import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'new_arrival',
  title: 'New Arrival',
  type: 'document',
  fields: [
    defineField({
      name: 'newarrival_prod',
      title: 'Product',
      type: 'product',
    }),
  ],
});
