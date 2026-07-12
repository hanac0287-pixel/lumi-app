export default function MoodCard() {
    return (
      <section className="mt-8">
  
        <div className="rounded-[32px] bg-white shadow-xl p-7">
  
          {/* 제목 */}
  
          <div className="flex items-center gap-3">
  
            <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-3xl">
              ✨
            </div>
  
            <div>
  
              <p className="text-sm text-gray-400">
                TODAY'S MOOD
              </p>
  
              <h3 className="text-2xl font-bold text-gray-800">
                오늘 사진에서 느껴진 분위기
              </h3>
  
            </div>
  
          </div>
  
          {/* 설명 */}
  
          <p className="mt-5 text-gray-500 leading-8">
            사진을 보며 느껴진 오늘의 분위기예요.
            <br />
            정답이 아닌, 오늘의 당신을 응원하기 위한 작은 힌트입니다.
          </p>
  
          {/* 태그 */}
  
          <div className="mt-8 flex flex-wrap gap-3">
  
            <span className="rounded-full bg-sky-100 px-5 py-3 text-sky-700 font-semibold">
              🌊 차분함
            </span>
  
            <span className="rounded-full bg-orange-100 px-5 py-3 text-orange-700 font-semibold">
              ☀️ 따뜻함
            </span>
  
            <span className="rounded-full bg-emerald-100 px-5 py-3 text-emerald-700 font-semibold">
              🍀 여유
            </span>
  
            <span className="rounded-full bg-violet-100 px-5 py-3 text-violet-700 font-semibold">
              ✨ 새로운 시작
            </span>
  
          </div>
  
          {/* 메시지 */}
  
          <div className="mt-8 rounded-2xl bg-orange-50 p-5">
  
            <p className="leading-8 text-gray-700">
  
              오늘의 사진에서는
              <strong className="text-orange-500">
                {" "}편안함과 따뜻함
              </strong>
              이 먼저 느껴졌어요.
  
              <br /><br />
  
              하지만 새로운 시작을 앞둔 지금은
              조금 더 자신감을 가져도 괜찮은 하루입니다.
  
            </p>
  
          </div>
  
        </div>
  
      </section>
    );
  }