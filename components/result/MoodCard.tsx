export default function MoodCard() {
  return (
    <div className="h-full rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl p-8 flex flex-col">

      {/* Header */}

      <div className="text-center">

        <div className="text-5xl">
          ✨
        </div>

        <p className="mt-4 text-xs tracking-[0.35em] text-sky-500 font-semibold">
          AI MOOD ANALYSIS
        </p>

        <h2 className="mt-2 text-3xl font-black text-gray-800">
          오늘의 분위기
        </h2>

      </div>

      {/* Score */}

      <div className="mt-8 space-y-5">

        <MoodBar
          emoji="🌊"
          title="차분함"
          value={92}
          color="bg-sky-400"
        />

        <MoodBar
          emoji="☀️"
          title="따뜻함"
          value={87}
          color="bg-orange-400"
        />

        <MoodBar
          emoji="🍀"
          title="행운"
          value={81}
          color="bg-emerald-400"
        />

      </div>

      {/* Message */}

      <div className="flex-1 flex items-center">

        <div className="w-full rounded-3xl bg-gradient-to-r from-orange-50 to-sky-50 p-6">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            TODAY'S MESSAGE
          </p>

          <p className="mt-4 text-xl leading-9 font-semibold text-gray-800">

            오늘은
            <span className="text-orange-500">
              {" "}새로운 기회
            </span>
            가
            <br />
            가까이 다가오는 하루입니다.

          </p>

          <p className="mt-5 leading-8 text-gray-600">

            조급하게 움직이기보다

            <br />

            평소처럼 차분하게 행동하면

            <br />

            좋은 흐름을 만날 가능성이 높습니다.

          </p>

        </div>

      </div>

    </div>
  );
}

interface MoodBarProps {
  emoji: string;
  title: string;
  value: number;
  color: string;
}

function MoodBar({
  emoji,
  title,
  value,
  color,
}: MoodBarProps) {
  return (
    <div>

      <div className="mb-2 flex justify-between">

        <span className="font-semibold text-gray-700">
          {emoji} {title}
        </span>

        <span className="font-bold text-gray-800">
          {value}%
        </span>

      </div>

      <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

        <div
          className={`${color} h-full rounded-full`}
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}