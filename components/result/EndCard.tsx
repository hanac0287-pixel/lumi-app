"use client";

import { useRouter } from "next/navigation";

export default function EndCard() {
  const router = useRouter();

  return (
    <div className="h-full rounded-[34px] bg-gradient-to-b from-orange-50 via-white to-sky-50 shadow-2xl p-8 flex flex-col">

      {/* Top */}

      <div className="text-center">

        <div className="text-6xl">
          🌙
        </div>

        <p className="mt-5 text-xs tracking-[0.35em] text-orange-400 font-semibold">
          SEE YOU TOMORROW
        </p>

        <h2 className="mt-3 text-3xl font-black text-gray-800">
          오늘도 수고했어요
        </h2>

        <p className="mt-4 leading-7 text-gray-500">
          오늘의 메이트가
          당신의 하루에
          작은 행운이 되었기를 바랍니다.
        </p>

      </div>

      {/* Center */}

      <div className="flex-1 flex items-center justify-center">

        <div className="rounded-3xl bg-white p-7 shadow-lg w-full">

          <div className="text-center text-5xl mb-5">
            🍀
          </div>

          <h3 className="text-center text-xl font-bold text-gray-800">
            내일도 새로운 메이트가
            기다리고 있어요.
          </h3>

          <p className="mt-4 text-center leading-8 text-gray-600">
            매일 다른 루미와 함께
            새로운 분위기와
            새로운 행운을 만나보세요.
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="space-y-4">

        <button
          onClick={() => router.push("/")}
          className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 py-4 text-lg font-bold text-white shadow-xl transition active:scale-95"
        >
          다시 테스트하기
        </button>

        <button
          onClick={() => router.push("/")}
          className="w-full rounded-2xl border border-orange-200 bg-white py-4 text-orange-500 font-semibold transition hover:bg-orange-50"
        >
          홈으로 돌아가기
        </button>

      </div>

    </div>
  );
}