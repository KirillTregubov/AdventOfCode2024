<div align="center">
  <h1>Advent of Code & Advent of TypeScript 2024</h1>
  <p>A set of TypeScript solutions for <a href="https://adventofcode.com/2024" rel="nofollow">Advent of Code 2024</a> and <a href="https://www.adventofts.com/events/2024" rel="nofollow">Advent of TypeScript 2024</a>.</p>
</div>

### Preface

This is my second time participating in Advent of Code. While I chose Rust last year (as I was learning it), I decided to use Bun to write this year's solutions in TypeScript. All solutions have been tested against the puzzle inputs provided to my account on the Advent of Code website. As per the [About](https://adventofcode.com/2024/about) page, the puzzle text and inputs are not included in this repository.

This is also my first time participating in Advent of TypeScript. All related solutions and tests will be in the `adventofts` directory.

### Prerequisites

You need to have [Bun](https://bun.sh) installed on your machine.

Also make sure to install all required dependencies before running this project:

```bash
bun install
```

## Advent of Code

### Inputs

The inputs for each day should be stored in the [`inputs`](inputs) directory in the root of the project. Each file is named after the day it corresponds to. For example, the input for day 1 is stored in `inputs/day1.txt`. The inputs can be retrieved from [Advent of Code 2024](https://adventofcode.com/2024).

### Running the Solutions

To run a solution, you need to run the corresponding file in the [`solutions`](solutions) directory. For example, to run the solution for day 1 part 1, you would run:

```bash
bun run solutions/day1_1.ts
```

To see all available solutions (excluding the `template.ts` file), take a look at the [`solutions`](solutions) directory.

### Implemented Solutions

| Day | Part 1 | Part 2 |
| --- | ------ | ------ |
| 1   | ✅     | ✅     |
| 2   | ✅     | ✅     |
| 3   | ✅     | ✅     |
| 4   | ✅     | ✅     |
| 5   | ✅     | ✅     |
| 6   | ❌     | ❌     |
| 7   | ❌     | ❌     |
| 8   | ❌     | ❌     |
| 9   | ❌     | ❌     |
| 10  | ❌     | ❌     |
| 11  | ❌     | ❌     |
| 12  | ❌     | ❌     |
| 13  | ❌     | ❌     |
| 14  | ❌     | ❌     |
| 15  | ❌     | ❌     |
| 16  | ❌     | ❌     |
| 17  | ❌     | ❌     |
| 18  | ❌     | ❌     |
| 19  | ❌     | ❌     |
| 20  | ❌     | ❌     |
| 21  | ❌     | ❌     |
| 22  | ❌     | ❌     |
| 23  | ❌     | ❌     |
| 24  | ❌     | ❌     |
| 25  | ❌     | ❌     |

## Advent of TypeScript

### Tests

This advent uses [type-testing](https://github.com/MichiganTypeScript/type-testing) to test the solutions.

### Running the Solutions

You can test all the implemented solutions by running:

```bash
bun run test-ts
```

To see all available solutions, take a look at the [`adventofts/solutions`](adventofts/solutions) directory.

### Implemented Solutions

| Day | Part 1 |
| --- | ------ |
| 1   | ✅     |
| 2   | ✅     |
| 3   | ✅     |
| 4   | ✅     |
| 5   | ✅     |
| 6   | ❌     |
| 7   | ❌     |
| 8   | ❌     |
| 9   | ❌     |
| 10  | ❌     |
| 11  | ❌     |
| 12  | ❌     |
| 13  | ❌     |
| 14  | ❌     |
| 15  | ❌     |
| 16  | ❌     |
| 17  | ❌     |
| 18  | ❌     |
| 19  | ❌     |
| 20  | ❌     |
| 21  | ❌     |
| 22  | ❌     |
| 23  | ❌     |
| 24  | ❌     |
| 25  | ❌     |
