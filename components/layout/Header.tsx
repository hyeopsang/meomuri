"use client";

import { useState, useEffect } from "react";
import { Search, Globe, Menu, User, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* 로고 */}
        <Link href="/" className="shrink-0 flex items-center gap-1.5">
          <div className="w-7 h-7 bg-[#4F46E5] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">머</span>
          </div>
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
            머무리
          </span>
        </Link>

        {/* 중앙 미니 검색바 — 태블릿 이상 */}
        <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 hover:bg-gray-100 transition-colors cursor-pointer gap-3">
          <Search className="w-4 h-4 text-[#4F46E5] shrink-0" />
          <span className="text-xs lg:text-sm font-semibold text-gray-700 whitespace-nowrap">
            어디든지
          </span>
          <span className="w-px h-4 bg-gray-300" />
          <span className="text-xs lg:text-sm text-gray-400 whitespace-nowrap">
            언제든지
          </span>
          <span className="hidden lg:block w-px h-4 bg-gray-300" />
          <span className="hidden lg:block text-xs lg:text-sm text-gray-400 whitespace-nowrap">
            게스트 추가
          </span>
        </div>

        {/* 우측 메뉴 */}
        <div className="relative flex items-center gap-1">
          <button className="hidden lg:block text-sm font-medium text-gray-700 hover:bg-gray-100 px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
            호스트 등록
          </button>
          <button className="hidden md:flex text-gray-500 hover:bg-gray-100 p-2.5 rounded-xl transition-colors">
            <Globe className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? (
              <X className="w-4 h-4 text-gray-600" />
            ) : (
              <Menu className="w-4 h-4 text-gray-600" />
            )}
            <div className="w-6 h-6 md:w-7 md:h-7 bg-[#4F46E5] rounded-lg flex items-center justify-center">
              <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
            </div>
          </button>

          {menuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute top-12 right-0 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                <button className="w-full text-left px-4 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors">
                  회원가입
                </button>
                <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors">
                  로그인
                </button>
                <div className="border-t border-gray-100 my-1" />
                <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors">
                  호스트 등록
                </button>
                <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors">
                  도움말
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
