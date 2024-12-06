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

const visited = Array.from({ length: map.length }, () =>
  Array.from({ length: map[0].length }, () => false)
)

visited[guard.position.y][guard.position.x] = true

function inBounds({ y, x }: { y: number; x: number }) {
  return y >= 0 && y < map.length && x >= 0 && x < map[0].length
}

while (true) {
  const nextMove = moves[guard.direction]
  const nextPos = {
    y: guard.position.y + nextMove.y,
    x: guard.position.x + nextMove.x
  }

  if (!inBounds(nextPos)) {
    break
  }

  if (map[nextPos.y][nextPos.x] === '#') {
    const curr = directions.indexOf(guard.direction)
    guard.direction = directions[(curr + 1) % 4]
  } else {
    visited[nextPos.y][nextPos.x] = true
    guard.position = nextPos
  }
}

let sum = 0
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (visited[i][j]) {
      sum++
    }
  }
}

console.log('Solution:', sum)
