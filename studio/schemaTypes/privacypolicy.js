export default {
    name: 'privacyPolicy',
    title: 'Privacy Policy',
    type: 'document',
    fields: [
      // Main page title (e.g., "Privacy Policy")
      {
        name: 'pageTitle',
        title: 'Page Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
        description: 'For example: "Privacy Policy"',
      },
  
      // Intro paragraphs (the initial text above the first subheading)
      {
        name: 'introParagraphs',
        title: 'Intro Paragraphs',
        type: 'array',
        of: [{ type: 'block' }], 
        description: 'Rich text for the introduction section before any subheadings.',
      },
  
      // Main sections: each with a heading and multiple paragraphs
      {
        name: 'sections',
        title: 'Policy Sections',
        type: 'array',
        of: [
          {
            name: 'section',
            title: 'Section',
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string',
                description: 'For example: "Privacy and Security", "Cookies", etc.',
              },
              {
                name: 'paragraphs',
                title: 'Paragraphs',
                type: 'array',
                of: [{ type: 'block' }], 
                description: 'Multiple paragraphs (rich text) under this heading.',
              },
            ],
          },
        ],
        description:
          'Add as many sections as needed, each with a heading and multiple paragraphs.',
      },
    ],
  };
  