"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white flex flex-col items-center justify-center px-6">

      {/* 상단 헤더 */}
      <div className="w-full max-w-sm flex items-center mb-6">

      <button
  onClick={() => router.back()}
 
>
  <Image
    src="/images/icons/arrow-left.svg"
    alt="뒤로가기"
    width={22}
    height={22}
  />
</button>

      </div>

      {/* 제목 */}
      <h1 className="text-4xl font-extrabold text-orange-500">
        얼굴 사진 선택
      </h1>

      {/* 설명 */}
      <p className="mt-5 text-center text-gray-700 text-lg leading-8">
        당신에게 가장 잘 어울리는 메이트를 찾기 위해
        <br />
        얼굴 사진이 필요해요.
      </p>

      {/* 안내 */}
      <p className="mt-3 text-center text-sm text-gray-400">
        😊 정면을 바라본 사진일수록
        <br />
        더 정확하게 메이트를 만날 수 있어요.
      </p>

      {/* 미리보기 */}
      <div className="mt-10 w-72 h-72 rounded-3xl border-2 border-dashed border-orange-300 bg-orange-50 flex items-center justify-center overflow-hidden">

        {preview ? (
          <img
            src={preview}
            alt="미리보기"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">

            <div className="text-7xl animate-pulse">
              🔮
            </div>

            <p className="mt-4 text-gray-500 font-medium">
              수정구가 기다리고 있어요.
            </p>

            <p className="text-sm text-gray-400 mt-1">
              얼굴 사진을 선택해주세요.
            </p>

          </div>
        )}

      </div>

      {/* 파일 선택 */}
      <input
        id="photo"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            setPreview(URL.createObjectURL(file));
          }
        }}
      />

      {/* 사진 선택 버튼 */}
      <label
        htmlFor="photo"
        className="mt-10 w-full max-w-sm cursor-pointer rounded-full bg-orange-500 py-5 text-center text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-orange-600"
      >
        📷 사진 선택하기
      </label>

      {/* 메이트 만나기 */}
      {preview && (
        <Link
          href="/loading"
          className="mt-4 w-full max-w-sm rounded-full bg-gray-800 py-5 text-center text-xl font-bold text-white shadow-lg transition duration-300 hover:scale-105"
        >
          ✨ 메이트 만나기
        </Link>
      )}

      {/* 하단 안내 */}
      <p className="mt-8 text-center text-sm text-gray-400">
        사진은 메이트를 찾는 데만 사용되며
        <br />
        서버에 저장되지 않습니다.
      </p>

    </main>
  );
}