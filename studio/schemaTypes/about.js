export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description1',
      title: 'Description1',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'description2',
      title: 'Description2',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'teamSectionTitle',
      title: 'Team Section Title',
      type: 'string',
    },
    {
      name: 'teamSectionDescription1',
      title: 'teamSectionDescription1',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'teamSectionDescription2',
      title: 'teamSectionDescription2',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'teamSectionDescription3',
      title: 'teamSectionDescription3',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', title: 'Image', type: 'image'},
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'designation', title: 'Designation', type: 'string'},
            {name: 'country', title: 'Country', type: 'string'},
            {name: 'linkedin', title: 'LinkedIn URL', type: 'url'},
          ],
        },
      ],
    },
  ],
}
