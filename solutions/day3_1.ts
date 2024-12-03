import { readInputFile } from '../helpers'

const input = await readInputFile('day3.txt')
// console.log(input)

const parsed = input.match(/mul\((\d+),(\d+)\)/g)
// console.log(parsed)

if (!parsed) {
  throw new Error('No matches')
}

let sum = 0
for (const line of parsed) {
  const [a, b] = line.substring(4, line.length - 1).split(',')
  // console.log(a, b)
  const val = Number(a) * Number(b)
  sum += val
}

console.log('Solution:', sum)
