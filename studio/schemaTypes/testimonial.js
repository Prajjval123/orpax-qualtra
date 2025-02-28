export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'testimonialItems',
      title: 'Testimonial Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) =>
                Rule.required().error('Name is required'),
            },
            {
              name: 'designation',
              title: 'Designation',
              type: 'string',
              validation: (Rule) =>
                Rule.required().error('Designation is required'),
            },
            {
              name: 'descriptions',
              title: 'Descriptions',
              type: 'array',
              of: [{ type: 'text' }],
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .error('At least one description is required'),
            },
          ],
        },
      ],
    },
  ],
};
