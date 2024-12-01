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

// console.log(leftList)
// console.log(rightList)

let sum = 0
for (let i = 0; i < leftList.length; i++) {
  let num = 0
  for (let j = 0; j < rightList.length; j++) {
    if (leftList[i] === rightList[j]) {
      num++
    }
  }

  sum += leftList[i] * num
}

console.log('Solution:', sum)
