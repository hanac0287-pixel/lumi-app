import { mates, Mate } from "../data/mates";
import { missions, Mission } from "../data/missions";
import { reactions } from "../data/reactions";

export interface RecommendationResult {
  mate: Mate;
  mood: string;
  mission: Mission;

  intro: string;
  insight: string;
  missionIntro: string;
}

function random<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

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

export function recommend(selectedTags: string[]): RecommendationResult {

  const mate = recommendMate(selectedTags);

  // 메이트가 가진 Mood 중 하나 선택
  const mood = random(mate.moods);

  // Mood + 메이트 선호 카테고리 둘 다 만족하는 미션
  let candidates = missions.filter(
    (mission) =>
      mission.moods.includes(mood as any) &&
      mate.favoriteMissionCategories.includes(mission.category)
  );

  // 없으면 Mood만 맞는 미션
  if (candidates.length === 0) {
    candidates = missions.filter((mission) =>
      mission.moods.includes(mood as any)
    );
  }

  // 그래도 없으면 전체 미션
  if (candidates.length === 0) {
    candidates = missions;
  }

  const mission = random(candidates);

  const reaction = reactions[mood as keyof typeof reactions];

  return {
    mate,
    mood,

    mission,

    intro: random(reaction.intro),

    insight: random(reaction.insight),

    missionIntro: random(reaction.missionIntro),
  };
}