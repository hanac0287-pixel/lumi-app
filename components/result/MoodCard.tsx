"use client";

import { motion } from "framer-motion";

interface MoodCardProps {
  mood: {
    title: string;
    icon: string;
    value: string;
    description: string;
  };
}

export default function MoodCard({ mood }: MoodCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-6 text-white">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{mood.icon}</div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] opacity-80">
              AI Mood Analysis
            </p>

            <h2 className="text-2xl font-bold">
              {mood.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-7 space-y-8">
        {/* Mood */}
        <div className="text-center">
          <div className="text-3xl font-black text-slate-800">
            {mood.value}
          </div>

          <p className="mt-4 leading-8 text-slate-600">
            {mood.description}
          </p>
        </div>

        {/* Energy */}
        <div>
          <div className="flex justify-between text-sm font-semibold text-slate-600">
            <span>오늘의 에너지</span>
            <span>84%</span>
          </div>

          <div className="mt-3 h-3 rounded-full bg-slate-200 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "84%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-400"
            />
          </div>
        </div>

        {/* Keywords */}
        <div>
          <p className="mb-4 text-sm font-bold text-slate-500">
            TODAY KEYWORDS
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "평온함",
              "집중력",
              "새로운 연결",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="rounded-3xl bg-sky-50 p-5">
          <p className="text-sm font-bold text-sky-700">
            💡 오늘의 추천
          </p>

          <p className="mt-3 leading-7 text-slate-600">
            중요한 결정을 서두르기보다 자연스럽게 흘러가는
            상황을 받아들이는 것이 좋습니다.
            예상하지 못한 연락이 새로운 기회가 될 수 있습니다.
          </p>
        </div>
      </div>
    </motion.section>
  );
}