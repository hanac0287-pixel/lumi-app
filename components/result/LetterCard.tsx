export default function LetterCard() {
  return (
    <div className="h-full rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl p-8 flex flex-col">

      {/* 상단 */}

      <div className="text-center">

        <div className="text-5xl">
          💌
        </div>

        <p className="mt-4 text-xs tracking-[0.35em] text-orange-400 font-semibold">
          LETTER FROM LUMI
        </p>

        <h2 className="mt-2 text-3xl font-black text-gray-800">
          오늘의 편지
        </h2>

      </div>

      {/* 편지 */}

      <div className="flex-1 flex items-center">

        <div className="w-full rounded-3xl bg-orange-50/70 border border-orange-100 p-6">

          <p className="leading-9 text-[17px] text-gray-700 whitespace-pre-line">

{`안녕하세요.

오늘은 조금 천천히
걸어도 괜찮아요.

늘 앞만 보고 달려온
당신이기에,

오늘만큼은
잠시 쉬어가도 됩니다.

당신은 이미
충분히 잘하고 있습니다.

오늘도
루미가 곁에서
응원할게요. 🍀`}

          </p>

        </div>

      </div>

      {/* 하단 */}

      <div className="pt-6 text-center">

        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2">

          <span>
            🦊
          </span>

          <span className="font-semibold text-orange-600">
            바다 루미
          </span>

        </div>

      </div>

    </div>
  );
}