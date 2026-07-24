"use client";

import Image from "next/image";
import { RecommendationResult } from "@/app/lib/recommendation";
import { downloadImage } from "@/app/lib/download";
import Header from "./Header";
import LetterCard from "./LetterCard";
import MissionCard from "./MissionCard";
import GiftCard from "./GiftCard";
import ShareCard from "./ShareCard";
import EndCard from "./EndCard";

interface ResultLayoutProps {
  result: RecommendationResult;
}

export default function ResultLayout({ result }: ResultLayoutProps) {
  const { mate, mission, intro, insight, missionIntro } = result;

  const handleSave = async () => {
    if (!mate.wallpaper) {
      alert(`${mate.name}의 배경화면은 아직 준비 중이에요.`);
      return;
    }

    try {
      await downloadImage(mate.wallpaper, `LUMI-${mate.id}.png`);
    } catch (e) {
      console.error(e);
      alert("다운로드에 실패했습니다.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <div className="mx-auto max-w-md px-5 pb-12">

        <Header onSave={handleSave} onBack={() => (window.location.href = "/")} />

        {/* 오늘의 메이트 소개 */}
        <section className="mt-2 rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl p-8 text-center">
          {mate.image ? (
            <div className="relative mx-auto h-40 w-40">
              <Image
                src={mate.image}
                alt={mate.name}
                fill
                priority
                className="object-contain drop-shadow-xl"
              />
            </div>
          ) : (
            <div className="text-7xl">{mate.emoji}</div>
          )}

          <p className="mt-5 text-xs tracking-[0.3em] uppercase text-orange-400 font-semibold">
            오늘의 메이트
          </p>

          <h1 className="mt-2 text-3xl font-black text-gray-800">
            {mate.name}
          </h1>

          <p className="mt-2 text-lg font-bold text-orange-500">
            {mate.title}
          </p>

          <p className="mt-3 leading-7 text-gray-500">
            {mate.description}
          </p>
        </section>

        <div className="mt-8 space-y-8">
          <LetterCard mate={mate} intro={intro} insight={insight} />

          <MissionCard missionIntro={missionIntro} mission={mission} />

          <GiftCard mate={mate} />

          <ShareCard />

          <EndCard />
        </div>

      </div>
    </main>
  );
}
