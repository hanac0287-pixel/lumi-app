"use client";

import { motion } from "framer-motion";

interface FortuneCardProps {
  fortune: {
    score: number;
    color: string;
    money: string;
    love: string;
    work: string;
  };
}

export default function FortuneCard({
  fortune,
}: FortuneCardProps) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const progress =
    circumference - (fortune.score / 100) * circumference;

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 px-7 py-6 text-white">
        <p className="text-xs tracking-[0.28em] uppercase opacity-80">
          AI Fortune Analysis
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          오늘의 행운 분석
        </h2>
      </div>

      <div className="p-7">

        {/* Score */}
        <div className="flex justify-center">

          <div className="relative h-40 w-40">

            <svg
              className="-rotate-90"
              width="160"
              height="160"
            >
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="10"
              />

              <motion.circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke={fortune.color}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{
                  strokeDashoffset: circumference,
                }}
                whileInView={{
                  strokeDashoffset: progress,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                }}
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl font-black text-slate-800">
                {fortune.score}
              </div>

              <div className="text-sm text-slate-500">
                /100
              </div>
            </div>

          </div>

        </div>

        {/* Comment */}
        <div className="mt-8 rounded-3xl bg-sky-50 p-5">
          <p className="font-semibold text-sky-700">
            🍀 AI 종합 분석
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            오늘은 전체적인 운의 흐름이 매우 안정적입니다.
            특히 사람과의 연결에서 좋은 기회가 생길 가능성이 높으며,
            작은 선택 하나가 예상보다 큰 결과를 만들어낼 수 있습니다.
          </p>
        </div>

        {/* Detail */}
        <div className="mt-8 space-y-5">

          <div className="rounded-3xl border border-slate-100 p-5">
            <div className="text-lg font-bold">
              💰 금전운
            </div>

            <p className="mt-3 leading-7 text-slate-600">
              {fortune.money}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 p-5">
            <div className="text-lg font-bold">
              ❤️ 연애운
            </div>

            <p className="mt-3 leading-7 text-slate-600">
              {fortune.love}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 p-5">
            <div className="text-lg font-bold">
              💼 일 · 학업운
            </div>

            <p className="mt-3 leading-7 text-slate-600">
              {fortune.work}
            </p>
          </div>

        </div>

        {/* Lucky */}
        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="rounded-3xl bg-sky-50 p-5 text-center">
            <div className="text-3xl">
              🎨
            </div>

            <div className="mt-3 text-sm font-semibold text-slate-500">
              행운색
            </div>

            <div className="mt-2 font-bold">
              Sky Blue
            </div>
          </div>

          <div className="rounded-3xl bg-sky-50 p-5 text-center">
            <div className="text-3xl">
              ⭐
            </div>

            <div className="mt-3 text-sm font-semibold text-slate-500">
              행운시간
            </div>

            <div className="mt-2 font-bold">
              14:00
            </div>
          </div>

          <div className="rounded-3xl bg-sky-50 p-5 text-center">
            <div className="text-3xl">
              🍀
            </div>

            <div className="mt-3 text-sm font-semibold text-slate-500">
              아이템
            </div>

            <div className="mt-2 font-bold">
              노트
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}