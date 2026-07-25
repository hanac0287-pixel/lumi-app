"use client";

import { useState } from "react";
import Image from "next/image";
import { Mate } from "@/app/data/mates";
import DownloadButton from "./DownloadButton";

interface GiftCardProps {
  mate: Mate;
  wallpaper?: string;
}

export default function GiftCard({ mate, wallpaper }: GiftCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = wallpaper && !imageFailed;

  return (
    <div className="flex h-full flex-col rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl p-6">

      {/* 상단: 고정 높이 */}
      <div className="shrink-0 text-center">
        <div className="text-4xl">🎁</div>

        <p className="mt-2 text-xs tracking-[0.35em] text-orange-500 font-semibold">
          WALLPAPER GIFT
        </p>

        <h2 className="mt-1 text-2xl font-black text-gray-800">
          오늘의 선물
        </h2>
      </div>

      {/* 중간: 남는 공간을 다 차지하되, 넘치면 알아서 줄어듦 (min-h-0가 핵심) */}
      <div className="my-4 min-h-0 flex-1">
        {showImage ? (
          <div className="relative mx-auto h-full w-full max-w-[220px]">
            <Image
              src={wallpaper}
              alt={mate.name}
              fill
              priority
              sizes="220px"
              className="rounded-3xl object-cover shadow-xl"
              onError={() => setImageFailed(true)}
            />
          </div>
        ) : (
          <div className="flex h-full w-full max-w-[220px] mx-auto flex-col items-center justify-center rounded-3xl bg-orange-50 text-center px-4">
            <div className="text-5xl">{mate.emoji}</div>
            <p className="mt-4 font-semibold text-orange-500">
              {mate.name}의 배경화면은
              <br />
              곧 준비돼요
            </p>
          </div>
        )}
      </div>

      {/* 하단: 고정 높이, 항상 화면에 보임 */}
      <div className="shrink-0">
        {wallpaper ? (
          <DownloadButton
            imageUrl={wallpaper}
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
