export default function HostBanner() {
  return (
    <section className="bg-indigo-50 py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        <div>
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">
            게스트하우스를 운영하고 계신가요?
          </h3>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-md">
            머무리에 등록하고 도미토리 침대 단위로 예약을 받아보세요.
            <br className="hidden md:block" />
            성별 구분 자동 차단부터 달력 관리까지 모두 지원해요.
          </p>
        </div>
        <button className="w-full md:w-auto shrink-0 bg-[#4F46E5] hover:bg-[#4338CA] active:scale-95 text-white font-semibold px-6 md:px-8 py-3.5 md:py-4 rounded-2xl transition-all text-sm md:text-base">
          호스트로 시작하기
        </button>
      </div>
    </section>
  );
}
