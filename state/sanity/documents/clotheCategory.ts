import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clothe_cat',
  title: 'Clothe Category',
  type: 'document',
  fields: [
    defineField({
      name: 'cat_name',
      title: 'Cat Name',
      type: 'string',
    }),
  ],
});
