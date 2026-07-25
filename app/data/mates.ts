import { MissionCategory } from "./missions";

export interface Mate {
  id: string;
  name: string;
  emoji: string;

  title: string;
  description: string;

  image?: string;
  wallpapers?: string[];

  tags: Record<string, number>;
  moods: string[];
  favoriteMissionCategories: MissionCategory[];
}

export const mates: Mate[] = [
  {
    id: "lumi",
    name: "루미",
    emoji: "🦊",
    title: "햇살 메이트",
    description: "새로운 시작을 응원하는 메이트",

    image: "/images/mates/lumi/idle.png",
    wallpapers: [
      "/images/wallpapers/camping-lumi.png",
      "/images/wallpapers/sea-lumi.png",
    ],

    tags: {
      희망: 5,
      행복: 4,
      용기: 5,
      도전: 5,
      설렘: 4,
      자신감: 3,
      자연: 2,
    },

    moods: ["challenge", "positive"],
    favoriteMissionCategories: ["walk", "discover"],
  },

  {
    id: "momo",
    name: "모모",
    emoji: "🐻",
    title: "쉼표 메이트",
    description: "천천히 회복하도록 도와주는 메이트",

    wallpapers: [
      "/images/wallpapers/camping-momo.png",
    ],

    tags: {
      휴식: 5,
      평온: 5,
      위로: 5,
      치유: 4,
      안정: 4,
    },

    moods: ["burnout", "sensitive"],
    favoriteMissionCategories: ["rest", "drink"],
  },

  {
    id: "bobo",
    name: "보보",
    emoji: "🦦",
    title: "행복 메이트",
    description: "작은 행복을 발견하게 도와주는 메이트",

    wallpapers: [
      "/images/wallpapers/camping-bobo.png",
      "/images/wallpapers/fall-bobo.png",
      "/images/wallpapers/fall-couple-bobo.png",
    ],

    tags: {
      행복: 5,
      따뜻함: 5,
      공감: 4,
      행운: 3,
      여유: 4,
      자유: 3,
    },

    moods: ["positive", "stable"],
    favoriteMissionCategories: ["discover", "connect"],
  },

  {
    id: "luna",
    name: "루나",
    emoji: "🐰",
    title: "용기 메이트",
    description: "한 걸음을 내딛도록 응원하는 메이트",

    wallpapers: [
      "/images/wallpapers/luna.png",
      "/images/wallpapers/sea-luna.png",
    ],

    tags: {
      희망: 5,
      꿈: 5,
      행운: 3,
      설렘: 4,
      도전: 3,
    },

    moods: ["challenge"],
    favoriteMissionCategories: ["walk", "discover"],
  },

  {
    id: "oli",
    name: "올리",
    emoji: "🦉",
    title: "생각 메이트",
    description: "생각을 정리하도록 도와주는 메이트",

    tags: {
      사색: 5,
      지혜: 5,
      감성: 4,
      안정: 3,
      여유: 4,
    },

    moods: ["overthinking"],
    favoriteMissionCategories: ["observe", "listen"],
  },

  {
    id: "mio",
    name: "미오",
    emoji: "🐱",
    title: "행운 메이트",
    description: "새로운 발견을 좋아하는 메이트",

    tags: {
      행운: 5,
      희망: 3,
      설렘: 4,
      행복: 3,
      용기: 2,
    },

    moods: ["curious"],
    favoriteMissionCategories: ["discover", "walk"],
  },
];
