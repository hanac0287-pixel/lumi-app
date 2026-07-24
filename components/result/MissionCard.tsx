interface MissionCardProps {
    missionIntro: string;
    mission: {
      title: string;
      description: string;
      duration: string;
      level: 1 | 2 | 3;
    };
  }
  
  export default function MissionCard({
    missionIntro,
    mission,
  }: MissionCardProps) {
    return (
      <div className="h-full rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl p-8 flex flex-col">
  
        <div className="text-center">
  
          <div className="text-5xl">
            🎯
          </div>
  
          <p className="mt-4 text-xs tracking-[0.35em] text-sky-500 font-semibold">
            TODAY'S MISSION
          </p>
  
          <h2 className="mt-2 text-3xl font-black text-gray-800">
            오늘의 미션
          </h2>
  
        </div>
  
        <div className="flex-1 flex items-center">
  
          <div className="w-full rounded-3xl bg-sky-50 border border-sky-100 p-6">
  
            <p className="text-sky-600 font-semibold">
              {missionIntro}
            </p>
  
            <h3 className="mt-5 text-2xl font-bold text-gray-800">
              {mission.title}
            </h3>
  
            <p className="mt-4 leading-8 text-gray-600">
              {mission.description}
            </p>
  
            <div className="mt-8 flex justify-between">
  
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold">
                ⏱ {mission.duration}
              </span>
  
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                난이도 {mission.level}
              </span>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }