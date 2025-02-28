export default {
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    fields: [
      // ---------------- HEADER ----------------
      {
        name: 'header',
        title: 'Header Section',
        type: 'object',
        fields: [
          {
            name: 'links',
            title: 'Navigation Links',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. ["Home","About","Services",...]',
          },
        ],
      },
  
      // ---------------- HERO SECTION ----------------
      {
        name: 'hero',
        title: 'Hero Section',
        type: 'object',
        fields: [
          {
            name: 'typingTexts',
            title: 'Typing Texts',
            type: 'array',
            of: [{ type: 'string' }],
            description: '["We Understand..", "We Solve..", "We Deliver.."]',
          },
          {
            name: 'serviceCards',
            title: 'Service Cards',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'number', title: 'Number', type: 'string' },
                  { name: 'industry', title: 'Industry', type: 'string' },
                  {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                  },
                  {
                    name: 'image',
                    title: 'Image (path or URL)',
                    type: 'string',
                  },
                  {
                    name: 'href',
                    title: 'Link',
                    type: 'string',
                  },
                ],
              },
            ],
          },
          {
            name: 'serviceCardButton',
            title: 'Service Card Button',
            type: 'string',
            description: 'Text for the service card button, e.g. "Know More"',
          },
          {
            name: 'divisionsHeading',
            title: 'Divisions Heading',
            type: 'string',
            description: 'e.g. "Our Divisions"',
          },
          {
            name: 'divisions',
            title: 'Divisions',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'name', title: 'Name', type: 'string' },
                  { name: 'href', title: 'Link', type: 'string' },
                ],
              },
            ],
          },
          {
            name: 'heading',
            title: 'Heading Array',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. ["Challenges", "Into", "Tailored Solutions."]',
          },
          {
            name: 'subheading',
            title: 'Subheading Array',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'An array of strings for your subheading text.',
          },
        ],
      },
  
      // ---------------- HOME SERVICES ----------------
      {
        name: 'homeServices',
        title: 'Home Services Section',
        type: 'object',
        fields: [
          {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  { name: 'description', title: 'Description', type: 'text' },
                  {
                    name: 'image',
                    title: 'Image (path or URL)',
                    type: 'string',
                  },
                ],
              },
            ],
          },
          {
            // Because you have an array-of-arrays, we’ll store each
            // sub-array in an object with its own “items” array.
            name: 'services_below',
            title: 'Services Below (Nested Arrays)',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'items',
                    title: 'Items',
                    type: 'array',
                    of: [{ type: 'string' }],
                    description: 'e.g. ["Utilities", "Energy Transmission"]',
                  },
                ],
              },
            ],
          },
        ],
      },
  
      // ---------------- HOME PROJECTS ----------------
      {
        name: 'homeProjects',
        title: 'Home Projects Section',
        type: 'object',
        fields: [
          {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  {
                    name: 'description',
                    title: 'Description (array of strings)',
                    type: 'array',
                    of: [{ type: 'string' }],
                  },
                  {
                    name: 'image',
                    title: 'Image (path or URL)',
                    type: 'string',
                  },
                ],
              },
            ],
          },
        ],
      },
  
      // ---------------- HOME PRODUCTS ----------------
      {
        name: 'homeProducts',
        title: 'Home Products Section',
        type: 'object',
        fields: [
          {
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'title', title: 'Title', type: 'string' },
                  {
                    name: 'image',
                    title: 'Image (path or URL)',
                    type: 'string',
                  },
                ],
              },
            ],
          },
          {
            name: 'productDemoHeading',
            title: 'Product Demo Heading',
            type: 'string',
            description: 'e.g. "Request a free demo"',
          },
        ],
      },
  
      // ---------------- FOOTER ----------------
      {
        name: 'footer',
        title: 'Footer Section',
        type: 'object',
        fields: [
          {
            name: 'icons',
            title: 'Social Icons',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'name', title: 'Name', type: 'string' },
                  { name: 'image', title: 'Icon Image', type: 'string' },
                  { name: 'link', title: 'Link', type: 'string' },
                ],
              },
            ],
          },
          {
            name: 'sitemap',
            title: 'Sitemap',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. ["Home", "About", "Services"]',
          },
          {
            name: 'address',
            title: 'Address Lines',
            type: 'array',
            of: [{ type: 'string' }],
            description: '["97-A, (FFB) Indraprastha Estate", "Sector-30-33", ...]',
          },
          {
            name: 'phone',
            title: 'Phone Numbers',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'email',
            title: 'Email Address',
            type: 'string',
          },
          {
            name: 'copyrightHeading',
            title: 'copyrightHeading',
            type: 'string',
            description: 'e.g. "Give the copyright heading"',
          },
        ],
      },
    ],
  };
  