"use client";

import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { Guesthouse } from "@/types/guesthouse";

export default function GuesthouseCard({ gh }: { gh: Guesthouse }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-100 mb-3">
        <div className="w-full h-full flex items-center justify-center text-5xl md:text-6xl bg-linear-to-br from-indigo-50 to-gray-100 group-hover:from-indigo-100 transition-colors duration-300 ease-out">
          {gh.emoji}
        </div>

        <button
          aria-label={liked ? "찜 해제" : "찜하기"}
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl transition-transform active:scale-90 shadow-sm"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              liked
                ? "fill-[#4F46E5] stroke-[#4F46E5]"
                : "fill-transparent stroke-gray-600 stroke-2"
            }`}
          />
        </button>

        {gh.isNew && (
          <div className="absolute top-3 left-3 bg-[#4F46E5] text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-sm">
            신규
          </div>
        )}

        <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
          {gh.types.map((t) => (
            <span
              key={t}
              className={`text-[11px] font-medium px-2 py-0.5 rounded-lg ${
                t === "도미토리"
                  ? "bg-gray-900/75 text-white"
                  : "bg-white/90 text-gray-800"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-start justify-between gap-2 mb-0.5">
          <p className="text-sm font-semibold text-gray-900 truncate leading-snug">
            {gh.name}
          </p>
          <div className="flex items-center gap-0.5 shrink-0">
            <Star className="w-3 h-3 fill-[#4F46E5] stroke-none" />
            <span className="text-xs text-gray-700">{gh.rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mb-2">{gh.region}</p>
        <div className="flex gap-1.5 flex-wrap mb-2">
          {gh.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-1 mb-2">
          {gh.spaces.map((s, i) => (
            <span key={i} className="text-sm">
              {s}
            </span>
          ))}
        </div>
        <p className="text-sm">
          <span className="font-semibold text-gray-900">
            ₩{gh.price.toLocaleString()}
          </span>
          <span className="text-gray-400 text-xs"> / 박</span>
        </p>
      </div>
    </article>
  );
}
