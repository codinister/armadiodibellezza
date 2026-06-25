import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  type: 'object',
  title: 'Product',

  fields: [
    defineField({
      name: 'prod_name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Product name field required!'),
      title: 'Product Name',
    }),
    defineField({
      name: 'prod_price',
      type: 'string',
      validation: (Rule) => Rule.required().error('Price field required!'),
      title: 'Product Price',
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required().error('Thumbnail field required!'),
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
      validation: (Rule) => Rule.required().error('Size field required!'),
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
