import { readInputFile } from '../helpers'

const input = await readInputFile('day8.txt')

const antennas = new Map<string, { y: number; x: number }[]>()
let width = 0
let height = 0
for (const [i, line] of input.split(/[\r?\n]+/).entries()) {
  const row = line.split('')
  if (width === 0) {
    width = row.length
  }

  for (let j = 0; j < row.length; j++) {
    const antenna = row[j]
    if (antenna === '.') {
      continue
    }

    if (!antennas.has(antenna)) {
      antennas.set(antenna, [])
    }
    antennas.get(antenna)!.push({ y: i, x: j })
  }

  height = i + 1
}

const interferences = Array.from({ length: height }, () =>
  Array.from({ length: width }, () => false)
)

for (const antenna of antennas.keys()) {
  const antennaLocations = antennas.get(antenna)!
  if (antennaLocations.length === 1) {
    continue
  }

  for (let i = 0; i < antennaLocations.length; i++) {
    for (let j = 0; j < antennaLocations.length; j++) {
      if (i === j) {
        continue
      }

      const location1 = antennaLocations[i]
      const location2 = antennaLocations[j]

      const dy = location1.y - location2.y
      const dx = location1.x - location2.x

      const newY = location1.y + dy
      const newX = location1.x + dx

      if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
        interferences[newY][newX] = true
      }
    }
  }
}

const sum = interferences.flat().filter(Boolean).length

console.log('Solution:', sum)
