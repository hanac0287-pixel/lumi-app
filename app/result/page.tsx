"use client";

import Header from "@/components/result/Header";
import HeroCard from "@/components/result/HeroCard";

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
      className="min-h-screen bg-cover bg-center px-6 pb-20"
      style={{
        backgroundImage: "url('/images/backgrounds/result.png')",
      }}
    >
      <div className="mx-auto max-w-md">

        <Header onSave={downloadWallpaper} />

        <HeroCard />

      </div>
    </main>
  );
}