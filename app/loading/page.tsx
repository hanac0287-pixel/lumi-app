"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/result");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-end px-6 pb-28"
      style={{
        backgroundImage: "url('/images/backgrounds/loading.png')",
      }}
    >
      {/* 아래 흰 카드 */}
      <div className="w-full max-w-sm rounded-3xl bg-white/90 backdrop-blur-md shadow-xl p-8 text-center">

        <h1 className="text-3xl font-bold text-orange-500">
          메이트를 찾고 있어요
        </h1>

        <p className="mt-5 text-gray-600 leading-8">
          수정구가 당신에게 가장 잘 어울리는
          <br />
          메이트를 찾고 있습니다.
        </p>

        {/* 로딩 바 */}
        <div className="mt-8 h-2 w-full rounded-full bg-orange-100 overflow-hidden">
          <div className="h-full w-1/2 bg-orange-500 animate-pulse rounded-full"></div>
        </div>

      </div>

    </main>
  );
}