import Image from "next/image";

export default function HeroCard() {
  return (
    <section className="animate-fade-in">

      {/* 작은 제목 */}

      <p className="text-center text-sm text-orange-500 font-semibold tracking-widest uppercase">
        TODAY'S MATE
      </p>

      {/* 큰 제목 */}

      <h2 className="mt-4 text-center text-4xl font-extrabold leading-tight text-gray-800">

        오늘

        <br />

        당신을 기다리던

        <span className="block mt-2 text-orange-500">

          메이트를 만났어요.

        </span>

      </h2>

      {/* 설명 */}

      <p className="mt-6 text-center text-gray-500 leading-8">

        오늘 하루 당신을 응원하기 위해

        <br />

        바다 루미가 찾아왔습니다.

      </p>

      {/* 카드 */}

      <div className="mt-10 rounded-[36px] bg-white shadow-2xl overflow-hidden">

        {/* 이미지 */}

        <div className="bg-gradient-to-b from-sky-50 via-white to-orange-50 px-8 pt-8 pb-6">

          <div className="mx-auto w-[210px] rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">

            <Image
              src="/images/wallpapers/sea-lumi.png"
              alt="바다 루미"
              width={1080}
              height={1920}
              priority
              className="w-full h-auto"
            />

          </div>

        </div>

        {/* 이름 */}

        <div className="px-8 pb-10 text-center">

          <p className="text-sm tracking-[0.2em] text-gray-400">

            MATE No.001

          </p>

          <h3 className="mt-3 text-5xl font-black text-orange-500">

            바다 루미

          </h3>

          <p className="mt-3 text-sky-500 font-bold">

            여유의 메이트

          </p>

          {/* 태그 */}

          <div className="mt-6 flex justify-center gap-2 flex-wrap">

            <span className="rounded-full bg-sky-100 px-4 py-2 text-sky-700 text-sm">

              🌊 여유

            </span>

            <span className="rounded-full bg-orange-100 px-4 py-2 text-orange-700 text-sm">

              ☀️ 힐링

            </span>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 text-sm">

              🍀 행운

            </span>

          </div>

        </div>

      </div>

    </section>
  );
}