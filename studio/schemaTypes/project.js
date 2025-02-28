export default {
  name: 'projectPage',
  title: 'Project Page',
  type: 'document',
  fields: [
    {
      name: 'projectGroups',
      title: 'Project Groups',
      type: 'array',
      of: [
        {
          name: 'group',
          title: 'Group',
          type: 'object',
          fields: [
            {
              name: 'projects',
              title: 'Projects',
              type: 'array',
              of: [
                {
                  name: 'projectItem',
                  title: 'Project Item',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'points',
                      title: 'Points',
                      type: 'array',
                      of: [{type: 'string'}], // Each bullet point is a simple string
                    },
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
