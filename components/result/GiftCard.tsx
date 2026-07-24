"use client";

import Image from "next/image";
import { Mate } from "@/app/data/mates";

interface GiftCardProps {
  mate: Mate;
  onSave: () => void;
}

export default function GiftCard({
  mate,
  onSave,
}: GiftCardProps) {
  return (
    <div className="h-full rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl p-8 flex flex-col">

      <div className="text-center">

        <div className="text-5xl">
          🎁
        </div>

        <p className="mt-4 text-xs tracking-[0.35em] text-orange-500 font-semibold">
          WALLPAPER GIFT
        </p>

        <h2 className="mt-2 text-3xl font-black text-gray-800">
          오늘의 선물
        </h2>

      </div>

      <div className="flex-1 flex items-center justify-center">

        <Image
          src={mate.wallpaper}
          alt={mate.name}
          width={250}
          height={500}
          priority
          className="rounded-3xl shadow-xl object-cover"
        />

      </div>

      <button
        onClick={onSave}
        className="mt-8 w-full rounded-2xl bg-orange-500 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
      >
        배경화면 저장하기
      </button>

    </div>
  );
}