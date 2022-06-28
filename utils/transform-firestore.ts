interface FirestoreDocument { 
  fields?: { [key: string]: any };
  values?: [
    { mapValue?: { fields?: { [key: string]: any } } }
  ];
}

export default function transformFirestore(item: FirestoreDocument) {
  const child = item?.fields ?? item?.values;
  if (!child) {
    return undefined;
  }
  if (item?.values) {
    return item.values.map((item) => {
      const value = item.mapValue ?? { fields: item };
      return transformFirestore(value);
    });
  }
  return Object.fromEntries(
    Object.entries(child).map(([key, value]) => {
      if (!value) {
        return [undefined, undefined];
      }
      const firstValue = Object.values(value)[0] as any;
      if (
        typeof firstValue === "object" &&
        !Array.isArray(firstValue) &&
        firstValue !== null
      ) {
        return [key, transformFirestore(firstValue)];
      }
      if (Array.isArray(firstValue)) {
        return [key, firstValue.map(transformFirestore)];
      }
      return [key, firstValue];
    }),
  );
}