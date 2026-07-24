export interface QuestionOption {
    id: number;
    text: string;
    tags: string[];
  }
  
  export interface Question {
    id: number;
    title: string;
    options: QuestionOption[];
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      title: "오늘 가장 걷고 싶은 길은?",
      options: [
        {
          id: 1,
          text: "🌲 숲속 오솔길",
          tags: ["안정", "휴식", "자연"],
        },
        {
          id: 2,
          text: "🌊 잔잔한 바닷가",
          tags: ["자유", "치유", "감성"],
        },
        {
          id: 3,
          text: "🌸 꽃이 가득한 공원",
          tags: ["행복", "희망", "따뜻함"],
        },
        {
          id: 4,
          text: "☕ 조용한 카페",
          tags: ["여유", "사색", "감성"],
        },
        {
          id: 5,
          text: "🌃 별이 보이는 언덕",
          tags: ["도전", "꿈", "설렘"],
        },
      ],
    },
  
    {
      id: 2,
      title: "지금 가장 듣고 싶은 소리는?",
      options: [
        {
          id: 1,
          text: "🐦 새소리",
          tags: ["희망", "자연", "행복"],
        },
        {
          id: 2,
          text: "🌧 빗소리",
          tags: ["치유", "휴식", "감성"],
        },
        {
          id: 3,
          text: "🌊 파도소리",
          tags: ["자유", "평온", "여유"],
        },
        {
          id: 4,
          text: "🎹 잔잔한 피아노",
          tags: ["감성", "사색", "안정"],
        },
        {
          id: 5,
          text: "🔥 모닥불 소리",
          tags: ["따뜻함", "용기", "휴식"],
        },
      ],
    },
  
    {
      id: 3,
      title: "오늘의 하늘은 어떤 모습인가요?",
      options: [
        {
          id: 1,
          text: "☀ 맑은 하늘",
          tags: ["희망", "행복", "자신감"],
        },
        {
          id: 2,
          text: "🌤 노을",
          tags: ["감성", "여유", "사색"],
        },
        {
          id: 3,
          text: "🌙 별이 많은 밤",
          tags: ["꿈", "설렘", "감성"],
        },
        {
          id: 4,
          text: "☁ 흐린 하늘",
          tags: ["위로", "치유", "평온"],
        },
        {
          id: 5,
          text: "🌈 무지개",
          tags: ["행운", "희망", "행복"],
        },
      ],
    },
  
    {
      id: 4,
      title: "오늘 가장 하고 싶은 일은?",
      options: [
        {
          id: 1,
          text: "📖 책 읽기",
          tags: ["사색", "지혜", "안정"],
        },
        {
          id: 2,
          text: "🚶 산책",
          tags: ["자연", "치유", "휴식"],
        },
        {
          id: 3,
          text: "😴 푹 쉬기",
          tags: ["평온", "휴식", "위로"],
        },
        {
          id: 4,
          text: "🎨 새로운 도전",
          tags: ["도전", "용기", "설렘"],
        },
        {
          id: 5,
          text: "💬 누군가와 이야기",
          tags: ["따뜻함", "행복", "공감"],
        },
      ],
    },
  
    {
      id: 5,
      title: "오늘 당신에게 가장 필요한 것은?",
      options: [
        {
          id: 1,
          text: "💛 위로",
          tags: ["위로", "평온", "치유"],
        },
        {
          id: 2,
          text: "🔥 용기",
          tags: ["용기", "도전", "자신감"],
        },
        {
          id: 3,
          text: "🌱 희망",
          tags: ["희망", "행운", "행복"],
        },
        {
          id: 4,
          text: "✨ 설렘",
          tags: ["설렘", "꿈", "도전"],
        },
        {
          id: 5,
          text: "🌸 평온",
          tags: ["평온", "안정", "휴식"],
        },
      ],
    },
  ];