"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ResultLayout from "@/components/result/ResultLayout";
import { RecommendationResult } from "@/app/lib/recommendation";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<RecommendationResult | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem("result");

    if (!raw) {
      setNotFound(true);
      return;
    }

    try {
      setResult(JSON.parse(raw) as RecommendationResult);
    } catch (e) {
      console.error("결과 데이터를 읽지 못했습니다.", e);
      setNotFound(true);
    }
  }, []);

  useEffect(() => {
    if (!notFound) return;

    const timer = setTimeout(() => {
      router.replace("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [notFound, router]);

  if (notFound) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-orange-50 via-amber-50 to-white px-6 text-center">
        <div>
          <p className="text-lg font-bold text-gray-700">
            테스트 결과를 찾을 수 없어요.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            잠시 후 홈으로 이동합니다.
          </p>
        </div>
      </main>
    );
  }

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-orange-50 via-amber-50 to-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-400 border-t-transparent" />
      </main>
    );
  }

  return <ResultLayout result={result} />;
}
