export default {
    name: 'clientImages',
    type: 'document',
    title: 'Client Images',
    fields: [
      {
        name: 'clients',
        type: 'array',
        title: 'Clients',
        of: [
          {
            type: 'image',
            title: 'Client Image',
            options: {
              hotspot: true, // Enables image cropping and focal point selection
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
                description: 'Important for accessibility and SEO.',
                options: {
                  isHighlighted: true, // Makes the field easily accessible
                },
              },
            ],
          },
        ],
        options: {
          layout: 'grid', // Displays images in a grid layout
        },
      },
    ],
  };
  