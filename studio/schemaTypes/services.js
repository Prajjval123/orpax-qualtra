export default {
    name: 'servicePage',
    title: 'Service Page',
    type: 'document',
    fields: [
      {
        name: 'mainServices',
        title: 'Main Services',
        type: 'object',
        fields: [
          // --------------- IT_Services ---------------
          {
            name: 'IT_Services',
            title: 'IT Services',
            type: 'array',
            of: [
              {
                name: 'itCategory',
                title: 'IT Category',
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    title: 'Category Name',
                    type: 'string',
                  },
                  {
                    name: 'value',
                    title: 'Value (Services Array)',
                    type: 'array',
                    of: [
                      {
                        name: 'serviceItem',
                        title: 'Service Item',
                        type: 'object',
                        fields: [
                          {
                            name: 'name',
                            title: 'Service Name',
                            type: 'string',
                          },
                          {
                            name: 'route',
                            title: 'Route',
                            type: 'string',
                          },
                          {
                            name: 'points',
                            title: 'Points',
                            type: 'array',
                            of: [
                              {
                                name: 'pointsBlock',
                                title: 'Points Block',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'title',
                                    title: 'Block Title',
                                    type: 'string',
                                  },
                                  {
                                    name: 'points',
                                    title: 'Bullet Points',
                                    type: 'array',
                                    of: [{ type: 'string' }],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                          },
                          {
                            name: 'descriptionpoints',
                            title: 'Description Points',
                            type: 'array',
                            of: [
                              {
                                name: 'descPointsBlock',
                                title: 'Description Points Block',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'title',
                                    title: 'Block Title',
                                    type: 'string',
                                  },
                                  {
                                    name: 'points',
                                    title: 'Bullet Points',
                                    type: 'array',
                                    of: [{ type: 'string' }],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'image',
                            title: 'Image Path',
                            type: 'string', // or 'image' if you want to upload
                          },
                          {
                            name: 'descriptionend',
                            title: 'Description End',
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
  
          // --------------- GIS_Services ---------------
          {
            name: 'GIS_Services',
            title: 'GIS Services',
            type: 'array',
            of: [
              {
                name: 'gisCategory',
                title: 'GIS Category',
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    title: 'Category Name',
                    type: 'string',
                  },
                  // value1 array
                  {
                    name: 'value1',
                    title: 'Value1 (Services Array)',
                    type: 'array',
                    of: [
                      {
                        name: 'serviceItem',
                        title: 'Service Item',
                        type: 'object',
                        fields: [
                          {
                            name: 'name',
                            title: 'Service Name',
                            type: 'string',
                          },
                          {
                            name: 'route',
                            title: 'Route',
                            type: 'string',
                          },
                          {
                            name: 'points',
                            title: 'Points',
                            type: 'array',
                            of: [
                              {
                                name: 'pointsBlock',
                                title: 'Points Block',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'title',
                                    title: 'Block Title',
                                    type: 'string',
                                  },
                                  {
                                    name: 'points',
                                    title: 'Bullet Points',
                                    type: 'array',
                                    of: [{ type: 'string' }],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                          },
                          {
                            name: 'descriptionpoints',
                            title: 'Description Points',
                            type: 'array',
                            of: [
                              {
                                name: 'descPointsBlock',
                                title: 'Description Points Block',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'title',
                                    title: 'Block Title',
                                    type: 'string',
                                  },
                                  {
                                    name: 'points',
                                    title: 'Bullet Points',
                                    type: 'array',
                                    of: [{ type: 'string' }],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'image',
                            title: 'Image Path',
                            type: 'string',
                          },
                          {
                            name: 'descriptionend',
                            title: 'Description End',
                            type: 'text',
                          },
                        ],
                      },
                    ],
                  },
                  // value2 array
                  {
                    name: 'value2',
                    title: 'Value2 (Services Array)',
                    type: 'array',
                    of: [
                      {
                        name: 'serviceItem',
                        title: 'Service Item',
                        type: 'object',
                        fields: [
                          // same fields as above
                          {
                            name: 'name',
                            title: 'Service Name',
                            type: 'string',
                          },
                          {
                            name: 'route',
                            title: 'Route',
                            type: 'string',
                          },
                          {
                            name: 'points',
                            title: 'Points',
                            type: 'array',
                            of: [
                              {
                                name: 'pointsBlock',
                                title: 'Points Block',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'title',
                                    title: 'Block Title',
                                    type: 'string',
                                  },
                                  {
                                    name: 'points',
                                    title: 'Bullet Points',
                                    type: 'array',
                                    of: [{ type: 'string' }],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                          },
                          {
                            name: 'descriptionpoints',
                            title: 'Description Points',
                            type: 'array',
                            of: [
                              {
                                name: 'descPointsBlock',
                                title: 'Description Points Block',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'title',
                                    title: 'Block Title',
                                    type: 'string',
                                  },
                                  {
                                    name: 'points',
                                    title: 'Bullet Points',
                                    type: 'array',
                                    of: [{ type: 'string' }],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'image',
                            title: 'Image Path',
                            type: 'string',
                          },
                          {
                            name: 'descriptionend',
                            title: 'Description End',
                            type: 'text',
                          },
                        ],
                      },
                    ],
                  },
                  // value3 array
                  {
                    name: 'value3',
                    title: 'Value3 (Services Array)',
                    type: 'array',
                    of: [
                      {
                        name: 'serviceItem',
                        title: 'Service Item',
                        type: 'object',
                        fields: [
                          // same fields as above
                          {
                            name: 'name',
                            title: 'Service Name',
                            type: 'string',
                          },
                          {
                            name: 'route',
                            title: 'Route',
                            type: 'string',
                          },
                          {
                            name: 'points',
                            title: 'Points',
                            type: 'array',
                            of: [
                              {
                                name: 'pointsBlock',
                                title: 'Points Block',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'title',
                                    title: 'Block Title',
                                    type: 'string',
                                  },
                                  {
                                    name: 'points',
                                    title: 'Bullet Points',
                                    type: 'array',
                                    of: [{ type: 'string' }],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                          },
                          {
                            name: 'descriptionpoints',
                            title: 'Description Points',
                            type: 'array',
                            of: [
                              {
                                name: 'descPointsBlock',
                                title: 'Description Points Block',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'title',
                                    title: 'Block Title',
                                    type: 'string',
                                  },
                                  {
                                    name: 'points',
                                    title: 'Bullet Points',
                                    type: 'array',
                                    of: [{ type: 'string' }],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            name: 'image',
                            title: 'Image Path',
                            type: 'string',
                          },
                          {
                            name: 'descriptionend',
                            title: 'Description End',
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
      },
    ],
  };
  