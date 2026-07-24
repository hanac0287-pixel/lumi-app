"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "@/components/result/Header";
import HeroCard from "@/components/result/HeroCard";
import LetterCard from "@/components/result/LetterCard";
import MoodCard from "@/components/result/MoodCard";
import GiftCard from "@/components/result/GiftCard";
import EndCard from "@/components/result/EndCard";

export default function ResultPage() {
  const downloadWallpaper = () => {
    const link = document.createElement("a");

    link.href = "/images/wallpapers/sea-lumi.png";

    const today = new Date().toISOString().slice(0, 10);

    link.download = `LUMI_바다루미_${today}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main
      className="h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/backgrounds/result.png')",
      }}
    >
      <div className="mx-auto flex h-full max-w-md flex-col px-4">

        <Header onSave={downloadWallpaper} />

        <div className="flex-1 overflow-hidden pb-4">

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={18}
            className="h-full"
          >
            <SwiperSlide className="h-full">
              <HeroCard />
            </SwiperSlide>

            <SwiperSlide className="h-full">
              <LetterCard />
            </SwiperSlide>

            <SwiperSlide className="h-full">
              <MoodCard />
            </SwiperSlide>

            <SwiperSlide className="h-full">
              <GiftCard onSave={downloadWallpaper} />
            </SwiperSlide>

            <SwiperSlide className="h-full">
              <EndCard />
            </SwiperSlide>

          </Swiper>

        </div>

      </div>
    </main>
  );
}