import { mates, Mate } from "../data/mates";

export function recommendMate(selectedTags: string[]): Mate {
  let bestMate = mates[0];
  let bestScore = -1;

  for (const mate of mates) {
    let score = 0;

    for (const tag of selectedTags) {
      score += mate.tags[tag] ?? 0;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMate = mate;
    }
  }

  return bestMate;
}