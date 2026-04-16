"use client";

import { Search, Heart, BookOpen, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "탐색", icon: Search, href: "/" },
  { label: "찜 목록", icon: Heart, href: "/wishlist" },
  { label: "예약", icon: BookOpen, href: "/my/bookings" },
  { label: "프로필", icon: User, href: "/my/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="flex items-center justify-around h-16">
        {NAV_ITEMS.map(({ label, icon: Icon, href }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
              pathname === href
                ? "text-[#FF385C]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Icon className={`w-5 h-5 ${pathname === href ? "stroke-[2.5px]" : ""}`} />
            <span className="text-[10px] font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
