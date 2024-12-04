import { readInputFile } from '../helpers'

const input = await readInputFile('day4.txt')

const arr = []

for (const line of input.split(/[\r?\n]+/)) {
  arr.push(line.split(''))
}

let occurrences = 0
for (let i = 1; i < arr.length - 1; i++) {
  for (let j = 1; j < arr[i].length - 1; j++) {
    if (arr[i][j] === 'A') {
      let topLeft = null
      let topRight = null
      if (
        (i - 1 >= 0 && j - 1 >= 0 && arr[i - 1][j - 1] === 'S') ||
        arr[i - 1][j - 1] === 'M'
      ) {
        topLeft = arr[i - 1][j - 1]
      }
      if (
        (i - 1 >= 0 && j + 1 < arr[i].length && arr[i - 1][j + 1] === 'S') ||
        arr[i - 1][j + 1] === 'M'
      ) {
        topRight = arr[i - 1][j + 1]
      }
      if (!topLeft || !topRight) {
        continue
      }

      let bottomLeft = false
      let bottomRight = false
      if (
        i + 1 < arr.length &&
        j - 1 >= 0 &&
        (arr[i + 1][j - 1] === 'S' || arr[i + 1][j - 1] === 'M')
      ) {
        if (arr[i + 1][j - 1] !== topRight) {
          bottomLeft = true
        }
      }
      if (
        i + 1 < arr.length &&
        j + 1 < arr[i].length &&
        (arr[i + 1][j + 1] === 'S' || arr[i + 1][j + 1] === 'M')
      ) {
        if (arr[i + 1][j + 1] !== topLeft) {
          bottomRight = true
        }
      }
      if (bottomLeft && bottomRight) {
        occurrences++
      }
    }
  }
}

console.log('Solution:', occurrences)
