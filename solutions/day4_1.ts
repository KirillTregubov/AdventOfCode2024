import { readInputFile } from '../helpers'

const input = await readInputFile('day4.txt')

const arr = []

for (const line of input.split(/[\r?\n]+/)) {
  arr.push(line.split(''))
}

let occurrences = 0
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 'X') {
      const forwards = arr[i].slice(j, j + 4).join('')
      if (forwards === 'XMAS') {
        occurrences++
      }

      const backwards = arr[i]
        .slice(j - 3, j + 1)
        .reverse()
        .join('')
      if (backwards === 'XMAS') {
        occurrences++
      }

      let verticalDown = ''
      let diagonalDownRight = ''
      let diagonalDownLeft = ''
      let l = j
      let m = j
      for (let k = i; k < i + 4 && k < arr.length; k++) {
        verticalDown += arr[k][j]

        if (l < j + 4 && l < arr[i].length) {
          diagonalDownRight += arr[k][l]
          l++
        }
        if (m >= 0 && m > j - 4) {
          diagonalDownLeft += arr[k][m]
          m--
        }
      }
      if (verticalDown === 'XMAS') {
        occurrences++
      }
      if (diagonalDownRight === 'XMAS' || diagonalDownRight === 'SAMX') {
        occurrences++
      }
      if (diagonalDownLeft === 'XMAS' || diagonalDownLeft === 'SAMX') {
        occurrences++
      }

      let verticalUp = ''
      let diagonalUpRight = ''
      let diagonalUpLeft = ''
      l = j
      m = j
      for (let k = i; k > i - 4 && k >= 0; k--) {
        verticalUp += arr[k][j]

        if (l > j - 4 && l >= 0) {
          diagonalUpRight += arr[k][l]
          l--
        }
        if (m < arr.length && m < j + 4) {
          diagonalUpLeft += arr[k][m]
          m++
        }
      }
      if (verticalUp === 'XMAS') {
        occurrences++
      }
      if (diagonalUpRight === 'XMAS' || diagonalUpRight === 'SAMX') {
        occurrences++
      }
      if (diagonalUpLeft === 'XMAS' || diagonalUpLeft === 'SAMX') {
        occurrences++
      }
    }
  }
}

console.log('Solution:', occurrences)
