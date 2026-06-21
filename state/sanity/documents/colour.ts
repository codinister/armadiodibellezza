import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'colour',
  title: 'Colour',
  type: 'document',
  fields: [
    defineField({
      name: 'colour_name',
      title: 'Colour Name',
      type: 'string',
    }),
    defineField({
      name: 'hex',
      title: 'Hex Code',
      type: 'string',
    }),
  ],
});
