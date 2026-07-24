export interface Mate {
    id: string;
    name: string;
    emoji: string;
  
    title: string;
    description: string;
    message: string;
  
    tags: Record<string, number>;
  
    wallpaper: string;
  }
  
  export const mates: Mate[] = [
    {
      id: "lumi",
      name: "루미",
      emoji: "🦊",
  
      title: "햇살 메이트",
  
      description:
        "따뜻한 햇살처럼 새로운 시작을 응원하는 메이트",
  
      message:
        "오늘은 새로운 기회가 당신을 기다리고 있어요.\n조금만 용기를 내보세요.",
  
      tags: {
        희망: 5,
        행복: 4,
        용기: 5,
        도전: 5,
        설렘: 4,
        자신감: 3,
      },
  
      wallpaper: "/wallpapers/lumi.jpg",
    },
  
    {
      id: "momo",
      name: "모모",
      emoji: "🐻",
  
      title: "쉼표 메이트",
  
      description:
        "지친 하루에 잠시 쉬어갈 수 있도록 도와주는 메이트",
  
      message:
        "오늘은 조금 천천히 걸어도 괜찮아요.\n당신은 충분히 잘하고 있습니다.",
  
      tags: {
        휴식: 5,
        평온: 5,
        위로: 5,
        치유: 4,
        안정: 4,
      },
  
      wallpaper: "/wallpapers/momo.jpg",
    },
  
    {
      id: "bobo",
      name: "보보",
      emoji: "🦦",
  
      title: "행복 메이트",
  
      description:
        "작은 행복을 발견하게 도와주는 메이트",
  
      message:
        "오늘은 평범한 하루 속에서도 웃을 일이 생길 거예요.",
  
      tags: {
        행복: 5,
        따뜻함: 5,
        공감: 4,
        행운: 3,
        여유: 4,
      },
  
      wallpaper: "/wallpapers/bobo.jpg",
    },
  
    {
      id: "luna",
      name: "루나",
      emoji: "🐰",
  
      title: "희망 메이트",
  
      description:
        "앞으로 나아갈 힘을 전해주는 메이트",
  
      message:
        "조금 늦어도 괜찮아요.\n당신의 속도로 걸어가면 됩니다.",
  
      tags: {
        희망: 5,
        꿈: 5,
        행운: 3,
        설렘: 4,
        도전: 3,
      },
  
      wallpaper: "/wallpapers/luna.jpg",
    },
  
    {
      id: "oli",
      name: "올리",
      emoji: "🦉",
  
      title: "지혜 메이트",
  
      description:
        "생각을 정리하도록 도와주는 메이트",
  
      message:
        "답은 이미 당신 안에 있습니다.\n오늘은 조금 더 자신을 믿어보세요.",
  
      tags: {
        사색: 5,
        지혜: 5,
        감성: 4,
        안정: 3,
        여유: 4,
      },
  
      wallpaper: "/wallpapers/oli.jpg",
    },
  
    {
      id: "mio",
      name: "미오",
      emoji: "🐱",
  
      title: "행운 메이트",
  
      description:
        "뜻밖의 행운을 가져다주는 메이트",
  
      message:
        "오늘은 작은 우연이 큰 행운으로 이어질지도 몰라요.",
  
      tags: {
        행운: 5,
        희망: 3,
        설렘: 4,
        행복: 3,
        용기: 2,
      },
  
      wallpaper: "/wallpapers/mio.jpg",
    },
  ];