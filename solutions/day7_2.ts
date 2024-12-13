import { readInputFile } from '../helpers'

const input = await readInputFile('day7.txt')

const validValues = []
for (const line of input.split(/[\r?\n]+/)) {
  const [first, rest] = line.split(': ')
  const result = Number(first)
  const operands = rest.split(' ').map(Number)

  function evaluate(index: number = 0, accumulator: number = operands[0]) {
    if (accumulator > result) {
      return false
    }
    if (index >= operands.length - 1) {
      return accumulator === result
    }

    const operand = operands[index + 1]
    if (evaluate(index + 1, accumulator + operand)) {
      return true
    }

    if (evaluate(index + 1, accumulator * operand)) {
      return true
    }

    if (evaluate(index + 1, Number(`${accumulator}${operand}`))) {
      return true
    }

    return false
  }

  if (evaluate()) {
    validValues.push(result)
  }
}

console.log(
  'Solution:',
  validValues.reduce((a, b) => a + b)
)
