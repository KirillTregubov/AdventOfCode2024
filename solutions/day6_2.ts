import { readInputFile } from '../helpers'

const input = await readInputFile('day6.txt')

const map: string[][] = []
for (const line of input.split(/[\r?\n]+/)) {
  map.push(line.split(''))
}

const directions = ['^', '>', 'v', '<'] as const
const moves = {
  '^': { y: -1, x: 0 },
  '>': { y: 0, x: 1 },
  v: { y: 1, x: 0 },
  '<': { y: 0, x: -1 }
} as const

function getGuard() {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (directions.includes(map[i][j] as (typeof directions)[number])) {
        return {
          position: { y: i, x: j },
          direction: map[i][j] as keyof typeof moves
        }
      }
    }
  }

  throw new Error('No guard found')
}

const guard = getGuard()

function inBounds({ y, x }: { y: number; x: number }) {
  return y >= 0 && y < map.length && x >= 0 && x < map[0].length
}

function checkObstruction(obstruction: { y: number; x: number }): boolean {
  let newGuard = { ...guard }
  const visited = new Set<string>()

  while (true) {
    const posKey = `(${newGuard.position.y},${newGuard.position.x},${newGuard.direction})`
    if (visited.has(posKey)) {
      return true
    }
    visited.add(posKey)

    const nextMove = moves[newGuard.direction]
    const nextPos = {
      y: newGuard.position.y + nextMove.y,
      x: newGuard.position.x + nextMove.x
    }

    if (!inBounds(nextPos)) {
      return false
    }

    if (
      (nextPos.y === obstruction.y && nextPos.x === obstruction.x) ||
      map[nextPos.y][nextPos.x] === '#'
    ) {
      const curr = directions.indexOf(newGuard.direction)
      newGuard.direction = directions[(curr + 1) % 4]
    } else {
      newGuard.position = nextPos
    }
  }
}

let sum = 0
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[0].length; j++) {
    if (
      map[i][j] === '.' &&
      !(i === guard.position.y && j === guard.position.x)
    ) {
      if (checkObstruction({ y: i, x: j })) {
        sum++
      }
    }
  }
}

console.log('Solution:', sum)
