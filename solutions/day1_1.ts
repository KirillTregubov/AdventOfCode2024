import { readInputFile } from '../helpers'

const input = await readInputFile('day1.txt')

let leftList = []
let rightList = []
for (const line of input.split('\n')) {
  // console.log(line)
  const inputs = line.split(/\s+/)
  leftList.push(parseInt(inputs[0]))
  rightList.push(parseInt(inputs[1]))
}

leftList.sort((a, b) => a - b)
rightList.sort((a, b) => a - b)

// console.log(leftList)
// console.log(rightList)

let sum = 0
for (let i = 0; i < leftList.length; i++) {
  let newDiff: number
  if (leftList[i] > rightList[i]) {
    newDiff = leftList[i] - rightList[i]
  } else {
    newDiff = rightList[i] - leftList[i]
  }
  // console.log(newDiff)

  sum += newDiff
}

console.log('Solution:', sum)
