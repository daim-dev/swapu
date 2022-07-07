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
  const firebaseStoreageBaseUrl = 'https://firebasestorage.googleapis.com/v0/b/geosynergy-swapu.appspot.com'
  if (renamed.image) {
    renamed.image = renamed.image.replace(firebaseStoreageBaseUrl, '');
  }
  renamed.links = [
    {
      url: `/listings/${renamed.id}`,
    },
  ];
  return renamed;
}