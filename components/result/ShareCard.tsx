"use client";

import { Share2, Link2, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function ShareCard() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("링크를 복사할 수 없습니다.");
    }
  };

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "LUMI",
        text: "오늘의 행운 메이트 결과를 확인해보세요.",
        url: window.location.href,
      });

      return;
    }

    copyLink();
  };

  return (
    <section className="rounded-[34px] bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-6 text-white">

        <p className="text-xs tracking-[0.25em] uppercase opacity-80">
          Share Result
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          행운을 친구와 공유해보세요
        </h2>

      </div>

      <div className="p-7 space-y-4">

        <button
          onClick={share}
          className="w-full rounded-2xl bg-sky-500 py-4 text-white font-bold flex justify-center items-center gap-3 hover:bg-sky-600 transition"
        >
          <Share2 size={20} />
          결과 공유하기
        </button>

        <button
          onClick={copyLink}
          className="w-full rounded-2xl border border-slate-200 py-4 font-semibold flex justify-center items-center gap-3 hover:bg-slate-50 transition"
        >
          <Link2 size={20} />
          {copied ? "링크가 복사되었습니다." : "링크 복사"}
        </button>

        <button
          onClick={() => (window.location.href = "/")}
          className="w-full rounded-2xl border border-slate-200 py-4 font-semibold flex justify-center items-center gap-3 hover:bg-slate-50 transition"
        >
          <RotateCcw size={20} />
          다시 테스트하기
        </button>

      </div>
    </section>
  );
}