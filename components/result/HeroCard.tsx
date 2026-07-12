import Image from "next/image";

export default function HeroCard() {
  return (
    <section className="mt-6">

      {/* 제목 */}
      <p className="text-center text-sm text-gray-500">
        분석 결과
      </p>

      <h2 className="mt-2 text-center text-3xl font-bold leading-snug">
        당신의 행운 메이트는

        <span className="block mt-2 text-orange-500">
          바다 루미예요!
        </span>
      </h2>

      <p className="mt-4 text-center text-gray-500 leading-7">
        오늘 당신에게 가장 잘 어울리는 메이트가
        <br />
        찾아왔어요.
      </p>

      {/* 메인 카드 */}
      <div className="mt-8 rounded-[36px] bg-white shadow-2xl overflow-hidden">

        {/* 배경화면 */}
        <div className="bg-gradient-to-b from-orange-50 to-white p-6">

          {/* 휴대폰 미리보기 */}
          <div className="mx-auto w-[210px] h-[380px] overflow-hidden rounded-[28px] shadow-2xl border-4 border-white">

            <Image
              src="/images/wallpapers/sea-lumi.png"
              alt="바다 루미"
              width={1080}
              height={1920}
              priority
              className="w-full h-full object-cover object-[center_35%]"
            />

          </div>

        </div>

        {/* 정보 */}
        <div className="px-8 pb-8 text-center">

          <p className="text-sm text-gray-400">
            Mate No.001
          </p>

          <h3 className="mt-2 text-4xl font-extrabold text-orange-500">
            바다 루미
          </h3>

          <p className="mt-3 text-xl font-semibold text-sky-500">
            여유의 메이트
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            바다처럼 넓은 마음과
            <br />
            시원한 에너지로
            <br />
            오늘 당신의 하루를
            <br />
            편안하게 만들어줄 메이트입니다.
          </p>

        </div>

      </div>

    </section>
  );
}