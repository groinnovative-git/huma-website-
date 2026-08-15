"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck, Heart } from "lucide-react";
import { REVIEWS, type Review } from "@/lib/reviews";

const LOOP_REVIEWS = [...REVIEWS, ...REVIEWS];

const REVIEW_LINK = "https://g.page/r/CbFQe2l4NnHwEAE/review";

const avatarColors = [
  "bg-primary",
  "bg-whatsapp",
  "bg-amber-500",
  "bg-rose-500",
  "bg-violet-500",
  "bg-teal-500",
  "bg-orange-500",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const meta = [
    review.isLocalGuide ? "Local Guide" : null,
    `${review.reviewCount} review${review.reviewCount === 1 ? "" : "s"}`,
    review.photoCount ? `${review.photoCount} photos` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="flex h-52 w-[300px] shrink-0 flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${avatarColors[index % avatarColors.length]}`}
        >
          {initials(review.name)}
        </span>
        <div>
          <div className="flex items-center gap-1">
            <p className="text-sm font-semibold text-ink">{review.name}</p>
            {review.isLocalGuide && (
              <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            )}
          </div>
          <p className="text-xs text-muted">{meta}</p>
        </div>
      </div>

      <div className="mt-3">
        <Stars />
      </div>

      {review.text && (
        <p className="mt-3 line-clamp-4 text-sm text-body">{review.text}</p>
      )}

      {review.likes && (
        <p className="mt-auto flex items-center gap-1 pt-3 text-xs text-muted">
          <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" aria-hidden="true" />
          {review.likes}
        </p>
      )}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="text-xl font-bold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>{" "}
            <span className="text-ink">Reviews</span>
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-2xl font-bold text-ink">5.0</span>
            <Stars />
            <span className="text-sm text-muted">({REVIEWS.length})</span>
          </div>
        </div>

        <a
          href={REVIEW_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Review us on Google
        </a>
      </motion.div>

      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

        <motion.div
          className="flex w-max items-start gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {LOOP_REVIEWS.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
