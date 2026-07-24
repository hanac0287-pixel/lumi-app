"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

  const slides = [
    <MateIntroSlide key="intro" mate={mate} />,
    <LetterCard key="letter" mate={mate} intro={intro} insight={insight} />,
    <MissionCard
      key="mission"
      missionIntro={missionIntro}
      mission={mission}
    />,
    <GiftCard key="gift" mate={mate} />,
    <ShareCard key="share" />,
    <EndCard key="end" />,
  ];

  return (
    <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <div className="mx-auto w-full max-w-md px-5">
        <Header onSave={handleSave} onBack={() => (window.location.href = "/")} />
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={0}
        className="lumi-result-swiper min-h-0 flex-1"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full justify-center overflow-y-auto px-5 pb-10 pt-2">
              <div className="flex h-full w-full max-w-md flex-col justify-center">
                {slide}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper 페이지네이션 점 색상을 브랜드 컬러에 맞춤 */}
      <style jsx global>{`
        .lumi-result-swiper .swiper-pagination-bullet {
          background: #f97316;
          opacity: 0.3;
        }
        .lumi-result-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .lumi-result-swiper .swiper-pagination {
          bottom: 4px !important;
        }
      `}</style>
    </div>
  );
}

function MateIntroSlide({ mate }: { mate: RecommendationResult["mate"] }) {
  return (
    <div className="flex h-full flex-col justify-center rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl p-8 text-center">
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

      <p className="mt-8 text-sm text-gray-400">
        좌우로 넘겨서 계속 보기 →
      </p>
    </div>
  );
}
