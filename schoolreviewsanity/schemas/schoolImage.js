export default {
    name: 'schoolImage',
    title: 'School Image',
    type: 'image',
    fields: [
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
        options: {
          isHightLight: true,
        },
      },
    ],
    options: {
      hotspot: true,
    },
  }