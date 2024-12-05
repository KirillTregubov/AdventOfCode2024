import { readInputFile } from '../helpers'

const input = await readInputFile('day5.txt')

const map = new Map<number, number[]>()

let separator = false
const rows = []

function hasInvalid(items: number[]) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (map.has(item)) {
      const after = map.get(item)
      if (after && after.length > 0) {
        for (let j = 0; j < i; j++) {
          if (after.includes(items[j])) {
            return true
          }
        }
      }
    }
  }
  return false
}

for (const line of input.split(/[\r?\n]{1,2}/)) {
  if (line === '') {
    separator = true
    continue
  }

  if (!separator) {
    const [x, y] = line.split('|').map(Number)
    // console.log(x, y)
    if (!map.has(x)) {
      map.set(x, [])
    }
    map.get(x)!.push(y)
  } else {
    const items = line.split(',').map(Number)
    // console.log(items)

    if (!hasInvalid(items)) {
      rows.push(items)
    }
  }
}

const middle = rows.map((row) => row[Math.floor(row.length / 2)])
const sum = middle.reduce((acc, cur) => acc + cur, 0)

console.log('Solution:', sum)
