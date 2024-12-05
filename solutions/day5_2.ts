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

    if (hasInvalid(items)) {
      rows.push(items)
    }
  }
}

// Kahn's algorithm
function sort(graph: Map<number, number[]>): number[] {
  const indegs = new Map<number, number>()
  for (const [node, nbrs] of graph.entries()) {
    if (!indegs.has(node)) indegs.set(node, 0)
    for (const nbr of nbrs) {
      indegs.set(nbr, (indegs.get(nbr) || 0) + 1)
    }
  }

  // queue in-degree 0
  const queue: number[] = []
  for (const [node, deg] of indegs.entries()) {
    if (deg === 0) {
      queue.push(node)
    }
  }

  // traverse until satisfied
  const result: number[] = []
  while (queue.length > 0) {
    const node = queue.shift()!
    result.push(node)

    for (const nbr of graph.get(node) || []) {
      const deg = indegs.get(nbr)! - 1
      indegs.set(nbr, deg)
      if (deg === 0) queue.push(nbr)
    }
  }

  return result
}

let sum = 0
for (const row of rows) {
  const updates = new Map<number, number[]>()

  // only keep pages that are in the row
  for (const page of row) {
    if (map.has(page)) {
      updates.set(
        page,
        (map.get(page) || []).filter((p) => row.includes(p))
      )
    }
  }

  const sortedRow = sort(updates)
  if (sortedRow.length === row.length) {
    const middleIndex = Math.floor(sortedRow.length / 2)
    sum += sortedRow[middleIndex]
  } else {
    console.error('Contains cycle')
  }
}

console.log('Solution:', sum)
