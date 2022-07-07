export default function createMapper (map: any) {
  return (key?: string) => {
    return key ? map[key] || key : map.missingValue
  }
}