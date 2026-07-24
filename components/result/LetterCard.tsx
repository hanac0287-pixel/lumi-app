export default function LetterCard() {
    return (
      <div className="rounded-3xl bg-white/90 p-8 text-center shadow-xl min-h-[520px] flex flex-col justify-center">
  
        <div className="text-5xl mb-6">
          💌
        </div>
  
        <h2 className="text-2xl font-bold mb-8">
          오늘의 편지
        </h2>
  
        <p className="leading-9 text-gray-700 whitespace-pre-line">
  
  {`안녕하세요.
  
  오늘은 조금 천천히
  걸어도 괜찮아요.
  
  당신은 이미
  충분히 잘하고 있습니다.
  
  오늘도
  루미가 응원할게요.`}
  
        </p>
  
      </div>
    );
  }