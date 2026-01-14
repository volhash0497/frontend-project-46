import genDiff from '../src/index.js'
import path from 'path'
import { readFileSync } from 'node:fs'

const getFixturesPath = (filename) => path.resolve(process.cwd(), filename)
const result = readFileSync(getFixturesPath('result.txt'), 'utf-8')

test('gendiff', () => {
  expect(genDiff(getFixturesPath('file1.json'), getFixturesPath('file2.json')),
  ).toBe(result)
})