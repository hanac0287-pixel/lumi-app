"use client";

import { useRouter } from "next/navigation";

export default function EndCard() {

  const router = useRouter();

  return (
    <div className="rounded-3xl bg-white/90 p-8 text-center shadow-xl min-h-[520px] flex flex-col justify-center">

      <div className="text-6xl mb-6">
        🌙
      </div>

      <h2 className="text-3xl font-bold mb-5">
        내일 또 만나요
      </h2>

      <p className="text-gray-600 mb-10 leading-8">
        오늘도 정말 수고했어요.
        <br />
        루미는 언제나
        당신을 응원합니다.
      </p>

      <button
        onClick={() => router.push("/")}
        className="rounded-full bg-indigo-600 py-4 text-white font-semibold hover:bg-indigo-700 transition"
      >
        다시 테스트하기
      </button>

    </div>
  );
}