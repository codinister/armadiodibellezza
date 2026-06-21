import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hair_cat',
  title: 'Hair Category',
  type: 'document',
  fields: [
    defineField({
      name: 'cat_name',
      title: 'Cat Name',
      type: 'string',
    }),
  ],
});
