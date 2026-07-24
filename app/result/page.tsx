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
      className="min-h-screen bg-cover bg-center px-4 py-6"
      style={{
        backgroundImage:
          "url('/images/backgrounds/result.png')",
      }}
    >
      <div className="mx-auto max-w-md">

        <Header onSave={downloadWallpaper} />

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          <SwiperSlide>
            <HeroCard />
          </SwiperSlide>

          <SwiperSlide>
            <LetterCard />
          </SwiperSlide>

          <SwiperSlide>
            <MoodCard />
          </SwiperSlide>

          <SwiperSlide>
            <GiftCard onSave={downloadWallpaper} />
          </SwiperSlide>

          <SwiperSlide>
            <EndCard />
          </SwiperSlide>

        </Swiper>

      </div>
    </main>
  );
}