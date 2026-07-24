"use client";

import HeroCard from "./HeroCard";
import MoodCard from "./MoodCard";
import FortuneCard from "./FortuneCard";
import WallpaperCard from "./WallpaperCard";
import ShareCard from "./ShareCard";
import EndCard from "./EndCard";

interface ResultLayoutProps {
  result: any;
}

export default function ResultLayout({
  result,
}: ResultLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-blue-50">

      {/* 컨텐츠 */}
      <section className="mx-auto max-w-md px-5 py-8 space-y-8">

        <HeroCard result={result} />

        <MoodCard mood={result.mood} />

        <FortuneCard fortune={result.fortune} />

        <WallpaperCard wallpaper={result.wallpaper} />

        <ShareCard />

        <EndCard />

      </section>

    </main>
  );
}