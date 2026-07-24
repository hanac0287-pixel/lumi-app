import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">

      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-8">

        {/* Logo */}

        <div className="mb-8 text-center">

          <div className="mb-6 text-7xl">
            ✨
          </div>

          <h1 className="text-5xl font-extrabold text-gray-800">
            LUMI
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            5개의 질문으로
            <br />
            오늘 당신에게 가장 잘 어울리는
            <br />
            메이트를 만나보세요.
          </p>

        </div>

        {/* Card */}

        <div className="w-full rounded-3xl bg-white p-8 shadow-xl">

          <div className="space-y-6">

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                🌿
              </div>

              <div>

                <h3 className="font-bold text-gray-800">
                  5개의 질문
                </h3>

                <p className="text-sm text-gray-500">
                  지금의 감정을 알아보는 간단한 테스트
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                💌
              </div>

              <div>

                <h3 className="font-bold text-gray-800">
                  오늘의 메이트
                </h3>

                <p className="text-sm text-gray-500">
                  당신에게 전하는 따뜻한 편지
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                🎁
              </div>

              <div>

                <h3 className="font-bold text-gray-800">
                  특별한 배경화면
                </h3>

                <p className="text-sm text-gray-500">
                  메이트가 준비한 오늘의 선물
                </p>

              </div>

            </div>

          </div>

          <Link
            href="/upload"
            className="mt-10 block w-full rounded-full bg-orange-500 py-4 text-center text-lg font-bold text-white transition hover:bg-orange-600"
          >
            ✨ 오늘의 메이트 만나기
          </Link>

        </div>

        <p className="mt-8 text-sm text-gray-400">
          약 30초 정도 소요됩니다.
        </p>

      </div>

    </main>
  );
}