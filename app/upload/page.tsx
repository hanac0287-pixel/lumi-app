
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../data/questions";
import { recommend } from "../lib/recommendation";

export default function UploadPage() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const question = questions[current];
  const progress = useMemo(
    () => Math.round(((current + 1) / questions.length) * 100),
    [current]
  );

  const handleSelect = (optionIndex: number) => {
    const option = question.options[optionIndex];

    const nextTags = [...selectedTags, ...option.tags];

    if (current === questions.length - 1) {
      const result = recommend(nextTags);

sessionStorage.setItem("result", JSON.stringify(result));

router.push("/loading");
return;
    }

    setSelectedTags(nextTags);
    setCurrent((prev) => prev + 1);
  };

  const goPrevious = () => {
    if (current === 0) return;
    history.back();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-10">

        <div className="mb-8">
          <div className="mb-2 flex justify-between text-sm text-gray-500">
            <span>질문 {current + 1}</span>
            <span>{questions.length}</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-orange-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {question.title}
          </h1>
        </div>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className="w-full rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-orange-400 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-gray-800">
                {option.text}
              </div>
            </button>
          ))}
        </div>

        {current > 0 && (
          <button
            onClick={goPrevious}
            className="mt-8 rounded-xl border border-gray-300 py-3 text-gray-600 transition hover:bg-gray-100"
          >
            이전 질문
          </button>
        )}
      </div>
    </main>
  );
}
