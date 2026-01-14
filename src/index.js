import { readFileSync } from 'node:fs'
import path from 'path'
import _ from 'lodash'
import parser from './parser.js'

export default (filepath1, filepath2) => {
  const data1 = readFileSync(path.resolve(filepath1), 'utf-8')
  const data2 = readFileSync(path.resolve(filepath2), 'utf-8')

  const parsedData1 = parser(data1)
  const parsedData2 = parser(data2)

  const genDiff = (obj1, obj2) => {
    const keys1 = Object.keys(obj1).sort()
    const keys2 = Object.keys(obj2).sort()
    const keys = [...new Set([...keys1, ...keys2])]

    const diff = keys.map((key) => {
      const hasKey1 = _.has(obj1, key)
      const hasKey2 = _.has(obj2, key)

      if (!hasKey2) {
        return `  - ${key}: ${obj1[key]}`
      }
      if (!hasKey1) {
        return `  + ${key}: ${obj2[key]}`
      }
      const val1 = obj1[key]
      const val2 = obj2[key]

      if (val1 === val2) {
        return `    ${key}: ${val1}`
      }
      return [
        `  - ${key}: ${val1}\n  + ${key}: ${val2}`,
      ]
    })

    return `{\n${diff.join('\n')}\n}`
  }

  return genDiff(parsedData1, parsedData2)
}
