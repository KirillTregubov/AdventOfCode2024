import { readInputFile } from '../helpers'

const input = await readInputFile('day3.txt')
// console.log(input)

const parsed = input.match(/(mul\((\d+),(\d+)\))|(do\(\))|(don't\(\))/g)
// console.log(parsed)

if (!parsed) {
  throw new Error('No matches')
}

let enabled = true
let sum = 0
for (const line of parsed) {
  if (line === 'do()') {
    enabled = true
    continue
  } else if (line === "don't()") {
    enabled = false
    continue
  }

  if (!enabled) {
    continue
  }

  const [a, b] = line.substring(4, line.length - 1).split(',')
  // console.log(a, b)
  const val = Number(a) * Number(b)
  sum += val
}

console.log('Solution:', sum)
