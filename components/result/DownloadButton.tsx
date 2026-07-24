"use client";

import { useState } from "react";
import { Download, Check } from "lucide-react";
import { downloadImage } from "@/app/lib/download";

interface DownloadButtonProps {
  imageUrl: string;
  fileName?: string;
}

export default function DownloadButton({
  imageUrl,
  fileName,
}: DownloadButtonProps) {
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);

      const today = new Date();
      const defaultName = `LUMI-${today.getFullYear()}-${String(
        today.getMonth() + 1
      ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}.png`;

      await downloadImage(imageUrl, fileName ?? defaultName);

      setCompleted(true);

      setTimeout(() => {
        setCompleted(false);
      }, 2200);
    } catch (e) {
      console.error(e);
      alert("다운로드에 실패했습니다.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="
      w-full
      rounded-2xl
      bg-gradient-to-r
      from-sky-500
      to-cyan-500
      px-6
      py-4
      text-white
      font-bold
      shadow-xl
      transition-all
      hover:scale-[1.02]
      active:scale-95
      disabled:opacity-70
      "
    >
      <div className="flex items-center justify-center gap-3">

        {completed ? (
          <>
            <Check size={22} />
            저장 완료
          </>
        ) : downloading ? (
          <>
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            다운로드 중...
          </>
        ) : (
          <>
            <Download size={22} />
            배경화면 저장하기
          </>
        )}

      </div>
    </button>
  );
}
