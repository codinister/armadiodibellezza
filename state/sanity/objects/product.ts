import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  type: 'object',
  title: 'Product',

  fields: [
    defineField({
      name: 'prod_name',
      type: 'string',
      title: 'Product Name',
    }),
    defineField({
      name: 'prod_price',
      type: 'string',
      title: 'Product Price',
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    }),

    defineField({
      name: 'size',
      title: 'Size',
      type: 'array',
      of: [
        {
          type: 'reference',
          options: {
            disableNew: true,
          },
          to: [
            {
              type: 'size',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'colour',
      title: 'Colour',
      type: 'array',
      of: [
        {
          type: 'reference',
          options: {
            disableNew: true,
          },
          to: [
            {
              type: 'colour',
            },
          ],
        },
      ],
    }),
  ],
});
