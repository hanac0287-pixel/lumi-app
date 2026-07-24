"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function EndCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[38px] bg-gradient-to-br from-sky-500 via-cyan-500 to-indigo-600 text-white shadow-2xl"
    >
      <div className="px-8 py-12 text-center">

        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur"
        >
          <Sparkles size={42} />
        </motion.div>

        <h2 className="mt-8 text-3xl font-black">
          오늘도 좋은 하루 되세요
        </h2>

        <p className="mt-6 leading-8 text-white/90">
          오늘의 행운은 지금 이 순간부터 시작됩니다.
          <br />
          내일 다시 방문하면 새로운 루미가 기다리고 있습니다.
        </p>

        <div className="mt-10 rounded-3xl bg-white/15 p-6 backdrop-blur">

          <div className="text-sm uppercase tracking-[0.3em] text-white/70">
            Tomorrow
          </div>

          <div className="mt-3 text-2xl font-bold">
            새로운 LUMI와 다시 만나기
          </div>

          <p className="mt-4 text-white/85 leading-7">
            매일 새로운 행운 분석과
            새로운 배경화면을 받아보세요.
          </p>

        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-10 w-full rounded-2xl bg-white py-4 text-lg font-bold text-sky-600 transition hover:scale-[1.02] active:scale-95"
        >
          홈으로 돌아가기
        </button>

      </div>
    </motion.section>
  );
}