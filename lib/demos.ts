export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Graph Construction',
    items: [
      {
        name: 'Upload',
        slug: 'upload',
        description:
          'Upload an image or a video to get start. Add and edit tags to the media.',
      },
    ],
  },
  {
    name: 'Graph Exploration',
    items: [
      {
        name: 'Exploration',
        slug: 'exploration',
        description: 'Explore stored media through graph.',
      },
    ],
  },
  {
    name: 'Video Editor',
    items: [
      {
        name: 'Editor',
        slug: 'editor',
        description:
          'Graph view, an innovative feature, to help you better structure you videos.',
      },
    ],
  },
];
