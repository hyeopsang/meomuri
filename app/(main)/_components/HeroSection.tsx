import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white">
      <div className="hidden md:block pt-12 pb-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            어디로 떠나고 싶으세요?
          </h1>
          <p className="text-gray-400 mb-8 text-sm">
            도미토리 침대 하나부터 한 달 살기까지, 게스트하우스만 모았어요
          </p>
          <SearchBar />
        </div>
      </div>

      <div className="md:hidden pt-6 pb-2">
        <div className="px-4 mb-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
            어디로 떠나고 싶으세요?
          </h1>
          <p className="text-gray-400 text-xs">게스트하우스 전용 예약 플랫폼</p>
        </div>
        <MobileSearchBar />
      </div>
    </section>
  );
}
