import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white flex flex-col items-center justify-center px-6">

      {/* 수정구 */}
      <Image
  src="/images/mates/lumi/idle.png"
  alt="LUMI"
  width={300}
  height={300}
  className="mx-auto"
/>

      {/* 로고 */}
      <h1 className="text-5xl font-extrabold text-orange-500">
        LUMI
      </h1>

      {/* 설명 */}
      <p className="mt-6 text-center text-gray-700 text-xl leading-9">
        오늘 당신을 기다리는
        <br />
        행운 메이트를 만나보세요.
      </p>

      {/* 버튼 */}
      <Link
  href="/upload"
  className="mt-12 w-full max-w-sm rounded-full bg-orange-500 py-5 text-xl font-bold text-white shadow-xl text-center"
>
  📷 사진으로 시작하기
</Link>
      {/* 안내 */}
      <p className="mt-8 text-center text-sm text-gray-400">
        사진 한 장으로
        <br />
        당신만의 메이트를 만나보세요.
      </p>

    </main>
  );
}