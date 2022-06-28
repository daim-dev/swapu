import normalizeData from './normalize-data';

export default function renameKeys(content) {
  const renamed = normalizeData({
    obj: content,
    keysMap: {
      postDesc: "description",
      postTitle: "name",
      postId: "id",
      postImages: "image",
      postLocation: 'location',
      cashValueNum: 'price',
    },
  });
  renamed.image = renamed.image?.[0]?.url;
  renamed.links = [
    {
      url: `/listings/${renamed.id}`,
    },
  ];
  return renamed;
}