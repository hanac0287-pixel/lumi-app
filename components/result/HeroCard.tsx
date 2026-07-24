"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroCardProps {
  result: {
    lumiName: string;
    emoji: string;
    title: string;
    subtitle: string;
  };
}

export default function HeroCard({
  result,
}: HeroCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
      }}
      className="relative overflow-hidden rounded-[36px] bg-white/70 backdrop-blur-xl shadow-2xl"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-cyan-100" />

      {/* Blur */}
      <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-sky-300/30 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative px-8 pt-10 pb-12">

        {/* Emoji */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="text-center text-7xl"
        >
          {result.emoji}
        </motion.div>

        {/* Lumi */}
        <motion.div
          initial={{ scale: .8 }}
          animate={{ scale: 1 }}
          transition={{
            delay: .2,
          }}
          className="mx-auto mt-8 h-64 w-64 relative"
        >
          <Image
            src="/characters/sea-lumi.png"
            alt={result.lumiName}
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Name */}
        <div className="mt-6 text-center">

          <p className="text-sm tracking-[0.35em] uppercase text-sky-500 font-semibold">
            LUMI MATE
          </p>

          <h1 className="mt-2 text-4xl font-black text-slate-800">
            {result.lumiName}
          </h1>

          <p className="mt-5 text-xl font-bold text-slate-700">
            {result.title}
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            {result.subtitle}
          </p>

        </div>

      </div>
    </motion.section>
  );
}