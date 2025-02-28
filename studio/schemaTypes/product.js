export default {
  name: 'product',
  title: 'Product Page',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // Enables image cropping
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
