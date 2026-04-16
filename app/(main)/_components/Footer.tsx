export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-4 md:px-6 py-6 md:py-8 mb-16 md:mb-0">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs md:text-sm text-gray-500">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <span className="text-gray-400">© 머무리</span>
          <button className="hover:text-gray-900 transition-colors">
            이용약관
          </button>
          <button className="hover:text-gray-900 transition-colors">
            개인정보처리방침
          </button>
          <button className="hover:text-gray-900 transition-colors">
            고객센터
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-gray-900 transition-colors">
            한국어
          </button>
          <span>₩ KRW</span>
        </div>
      </div>
    </footer>
  );
}
