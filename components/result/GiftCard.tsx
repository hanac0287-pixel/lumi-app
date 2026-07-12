import Image from "next/image";

interface GiftCardProps {
  onSave: () => void;
}

export default function GiftCard({ onSave }: GiftCardProps) {
  return (
    <section className="mt-8">

      <div className="rounded-[32px] bg-white shadow-xl p-7">

        <div className="flex items-center gap-3">

          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-3xl">
            🎁
          </div>

          <div>

            <p className="text-sm text-gray-400">
              TODAY'S GIFT
            </p>

            <h3 className="text-2xl font-bold text-gray-800">
              루미가 준비한 선물
            </h3>

          </div>

        </div>

        <p className="mt-5 text-gray-600 leading-8">
          오늘 하루도 당신을 응원할 수 있도록
          <br />
          특별한 휴대폰 배경화면을 준비했어요.
        </p>

        {/* 미리보기 */}

        <div className="mt-8 flex justify-center">

          <div className="w-[150px] rounded-[24px] overflow-hidden shadow-xl border-4 border-orange-100">

            <Image
              src="/images/wallpapers/sea-lumi.png"
              alt="Wallpaper"
              width={1080}
              height={1920}
              className="w-full h-auto"
            />

          </div>

        </div>

        <button
          onClick={onSave}
          className="mt-8 w-full rounded-full bg-orange-500 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105"
        >
          📥 배경화면 저장하기
        </button>

        <p className="mt-5 text-center text-sm text-gray-400">
          저장해서 오늘 하루
          <br />
          루미와 함께해 보세요.
        </p>

      </div>

    </section>
  );
}