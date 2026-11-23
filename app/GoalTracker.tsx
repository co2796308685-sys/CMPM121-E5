import { hasCrate, type Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const total = puzzle.layout.goals.length;
  const filled =
    puzzle.layout.goals.filter((goal) => hasCrate(puzzle, goal)).length;

  return <p>Goals filled: {filled} of {total}</p>;
}
