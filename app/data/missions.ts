export type MissionCategory =
  | "observe"
  | "walk"
  | "rest"
  | "drink"
  | "discover"
  | "listen"
  | "connect";

export type MoodType =
  | "burnout"
  | "overthinking"
  | "stable"
  | "challenge"
  | "lonely"
  | "sensitive"
  | "curious"
  | "positive";

export interface Mission {
  id: number;
  title: string;
  description: string;
  duration: string;

  category: MissionCategory;

  // 어떤 심리상태에 추천되는지
  moods: MoodType[];

  // 난이도
  level: 1 | 2 | 3;
}

export const missions: Mission[] = [

  {
    id:1,
    title:"하늘 보기",
    description:"10초 동안 하늘만 바라보세요.",
    duration:"10초",
    category:"observe",
    moods:["burnout","overthinking","sensitive"],
    level:1
  },

  {
    id:2,
    title:"다른 길 걷기",
    description:"평소와 다른 길로 3분만 걸어보세요.",
    duration:"3분",
    category:"walk",
    moods:["burnout","stable","challenge"],
    level:2
  },

  {
    id:3,
    title:"물 한 잔",
    description:"물을 천천히 마셔보세요.",
    duration:"30초",
    category:"drink",
    moods:["burnout","sensitive"],
    level:1
  },

  {
    id:4,
    title:"창밖 보기",
    description:"창밖 풍경을 잠시 바라보세요.",
    duration:"30초",
    category:"observe",
    moods:["overthinking","burnout"],
    level:1
  },

  {
    id:5,
    title:"새로운 음료",
    description:"평소 마시지 않던 음료를 골라보세요.",
    duration:"5분",
    category:"discover",
    moods:["stable","curious"],
    level:2
  },

  {
    id:6,
    title:"랜덤 음악",
    description:"랜덤으로 음악 한 곡을 들어보세요.",
    duration:"3분",
    category:"listen",
    moods:["lonely","burnout","positive"],
    level:1
  },

  {
    id:7,
    title:"감사 문자",
    description:"고마운 사람에게 짧게 안부를 보내보세요.",
    duration:"2분",
    category:"connect",
    moods:["lonely","positive"],
    level:2
  },

  {
    id:8,
    title:"어깨 돌리기",
    description:"어깨를 천천히 다섯 번 돌려보세요.",
    duration:"30초",
    category:"rest",
    moods:["burnout"],
    level:1
  },

  {
    id:9,
    title:"파란색 찾기",
    description:"주변에서 파란색 물건을 다섯 개 찾아보세요.",
    duration:"1분",
    category:"discover",
    moods:["overthinking","curious"],
    level:1
  },

  {
    id:10,
    title:"휴대폰 내려놓기",
    description:"1분 동안 휴대폰을 보지 않아보세요.",
    duration:"1분",
    category:"rest",
    moods:["overthinking","burnout"],
    level:2
  }

  // 앞으로 여기부터
  // 11~50 추가
];