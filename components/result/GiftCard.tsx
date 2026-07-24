"use client";

import Image from "next/image";
import { Mate } from "@/app/data/mates";
import DownloadButton from "./DownloadButton";

interface GiftCardProps {
  mate: Mate;
}

export default function GiftCard({ mate }: GiftCardProps) {
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

      <div className="mt-8 flex flex-1 items-center justify-center">
        {mate.wallpaper ? (
          <Image
            src={mate.wallpaper}
            alt={mate.name}
            width={250}
            height={500}
            priority
            className="rounded-3xl shadow-xl object-cover"
          />
        ) : (
          <div className="flex h-[320px] w-[220px] flex-col items-center justify-center rounded-3xl bg-orange-50 text-center px-4">
            <div className="text-5xl">{mate.emoji}</div>
            <p className="mt-4 font-semibold text-orange-500">
              {mate.name}의 배경화면은
              <br />
              곧 준비돼요
            </p>
          </div>
        )}
      </div>

      <div className="mt-8">
        {mate.wallpaper ? (
          <DownloadButton
            imageUrl={mate.wallpaper}
            fileName={`LUMI-${mate.id}.png`}
          />
        ) : (
          <button
            disabled
            className="w-full rounded-2xl bg-gray-100 py-4 text-lg font-bold text-gray-400 cursor-not-allowed"
          >
            준비 중이에요
          </button>
        )}
      </div>

    </div>
  );
}
