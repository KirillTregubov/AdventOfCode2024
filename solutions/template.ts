import { readInputFile } from '../helpers'

const input = await readInputFile('scratch.txt')

for (const line of input.split(/[\r?\n]+/)) {
  console.log(line)
}

console.log('Solution:')
