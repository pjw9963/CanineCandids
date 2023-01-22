import { CollectionConfig } from 'payload/types';

const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: ({ req: { user } }) => {
      return true
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'upload',
      type: 'upload',
      relationTo: 'images',
    },
    {
      name: 'tags',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Jasmine',
          value: 'jasmine',
        },
        {
          label: 'Koda',
          value: 'koda',
        },
        {
          label: 'Cute',
          value: 'cute',
        },
        {
          label: 'Goofy',
          value: 'goofy',
        },
      ],
      admin: {
        isClearable: true,
      }
    },
    {
      name: 'public',
      type: 'checkbox',
      label: 'Shared with public',
      defaultValue: false,
    }
  ],
  upload: {
    staticURL: '/images',
    staticDir: 'images',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
};

export default Images;