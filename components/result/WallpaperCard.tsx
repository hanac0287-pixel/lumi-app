"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DownloadButton from "./DownloadButton";

interface Wallpaper {
  image: string;
  title: string;
  theme: string;
  downloadName: string;
}

interface WallpaperCardProps {
  wallpaper: Wallpaper;
}

export default function WallpaperCard({
  wallpaper,
}: WallpaperCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* Header */}

      <div className="bg-gradient-to-r from-violet-500 via-sky-500 to-cyan-500 px-7 py-6 text-white">

        <p className="text-xs uppercase tracking-[0.28em] opacity-80">
          Exclusive Wallpaper
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {wallpaper.title}
        </h2>

        <p className="mt-2 text-sm text-white/80">
          Theme · {wallpaper.theme}
        </p>

      </div>

      <div className="p-8">

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mx-auto w-[240px]"
        >
          <div className="rounded-[42px] bg-slate-900 p-[10px] shadow-2xl">

            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[34px]">

              <Image
                src={wallpaper.image}
                alt={wallpaper.title}
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>
        </motion.div>

        <div className="mt-8 text-center">

          <h3 className="text-xl font-bold">
            오늘의 루미와 함께
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            오늘 당신에게 찾아온 루미를
            배경화면으로 저장해 보세요.
          </p>

        </div>

        <div className="mt-10">

          <DownloadButton
            imageUrl={wallpaper.image}
            fileName={`${wallpaper.downloadName}.png`}
          />

        </div>

      </div>

    </motion.section>
  );
}