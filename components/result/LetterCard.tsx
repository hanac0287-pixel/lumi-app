"use client";

import { Mate } from "@/app/data/mates";

interface LetterCardProps {
  mate: Mate;
  intro: string;
  insight: string;
}

export default function LetterCard({
  mate,
  intro,
  insight,
}: LetterCardProps) {
  return (
    <div className="flex h-full flex-col rounded-[34px] bg-white/90 p-8 shadow-2xl backdrop-blur-xl">

      <div className="text-center">

        <div className="text-5xl">
          💌
        </div>

        <p className="mt-4 text-xs font-semibold tracking-[0.35em] text-orange-500">
          LETTER
        </p>

        <h2 className="mt-2 text-3xl font-black text-gray-800">
          오늘의 편지
        </h2>

      </div>

      <div className="mt-10 flex-1">

        <p className="whitespace-pre-line text-lg leading-9 text-gray-700">
          {intro}

          {"\n\n"}

          {insight}
        </p>

      </div>

      <div className="mt-8 border-t border-gray-100 pt-6 text-right">

        <p className="font-bold text-orange-500">
          From. {mate.name}
        </p>

      </div>

    </div>
  );
}