"use client";

import ResultLayout from "@/components/result/ResultLayout";

export default function ResultPage() {
  const result = {
    lumiName: "바다 루미",
    emoji: "🦊",

    title: "오늘 당신을 찾아온 행운 메이트",

    subtitle:
      "당신은 조용하지만 강한 에너지를 가진 사람입니다. 오늘은 주변 사람과의 연결에서 뜻밖의 행운이 시작될 수 있습니다.",

    mood: {
      title: "오늘의 무드",
      icon: "✨",
      value: "Calm Energy",
      description:
        "무리하지 않아도 좋은 하루입니다. 자연스럽게 흘러가는 선택이 가장 좋은 결과를 가져옵니다.",
    },

    fortune: {
      score: 92,
      color: "#60A5FA",

      money:
        "지출보다 작은 수입의 기회가 들어옵니다.",

      love:
        "대화에서 좋은 인상을 남길 수 있습니다.",

      work:
        "작은 성과가 다음 기회를 연결합니다.",
    },

    wallpaper: {
      image: "/wallpapers/sea-lumi.png",

      title: "바다 루미",

      theme: "Ocean",

      downloadName: "Sea-LUMI",
    },
  };

  return (
    <ResultLayout result={result} />
  );
}