import { readInputFile } from '../helpers'

const input = await readInputFile('day2.txt')

let safe = 0
for (const line of input.split(/[\r?\n]+/)) {
  const report = line.split(' ').map(Number)
  // console.log(report)

  let unsafe = false
  let direction = 0
  let fails = 0
  for (let i = 1; i < report.length - fails; i++) {
    if (
      direction !== -1 &&
      report[i - 1] > report[i] &&
      report[i - 1] - report[i] > 0 &&
      report[i - 1] - report[i] < 4
    ) {
      direction = 1
      continue
    } else if (
      direction !== 1 &&
      report[i - 1] < report[i] &&
      report[i] - report[i - 1] > 0 &&
      report[i] - report[i - 1] < 4
    ) {
      direction = -1
      continue
    } else {
      if (fails === 0) {
        direction = 0
        fails++
        for (let j = i; j < report.length - 1; j++) {
          report[j] = report[j + 1]
        }
        i--
        continue
      }

      unsafe = true
      break
    }
  }

  if (!unsafe) {
    // console.log('safe')
    safe++
  }
}

console.log('Solution:', safe)
