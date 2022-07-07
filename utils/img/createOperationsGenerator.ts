import createMapper from "./createMapper"
import { OperationGeneratorConfig } from "~/types/image"

export default function createOperationsGenerator({ formatter, keyMap, joinWith = '/', valueMap }: OperationGeneratorConfig = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`
  }
  if (keyMap && typeof keyMap !== 'function') {
    keyMap = createMapper(keyMap)
  }
  const map = valueMap || {}
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== 'function') {
      map[valueKey] = createMapper(map[valueKey])
    }
  })

  return (modifiers: { [key: string]: string } = {}) => {
    const operations = Object.entries(modifiers)
      .filter(([_, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        const mapper = map[key]
        if (typeof mapper === 'function') {
          value = mapper(modifiers[key])
        }

        key = typeof keyMap === 'function' ? keyMap(key) : key

        return formatter!(key, value)
      })

    return operations.join(joinWith)
  }
}