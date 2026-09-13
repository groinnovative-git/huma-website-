"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Headset, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/contact";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);

  return (
    <div ref={constraintsRef} className="pointer-events-none fixed inset-4 z-50">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0.08}
        onDragStart={() => {
          draggedRef.current = true;
        }}
        onDragEnd={() => {
          setTimeout(() => {
            draggedRef.current = false;
          }, 50);
        }}
        className="pointer-events-auto absolute bottom-4 right-4 flex h-14 w-14 cursor-grab items-center justify-center active:cursor-grabbing"
      >
        <AnimatePresence>
          {open && (
            <>
              <motion.a
                key="phone"
                href={PHONE_HREF}
                aria-label="Call us"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x: -20, y: -70 }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute z-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-[#051024] text-white shadow-xl transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </motion.a>
              <motion.a
                key="whatsapp"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x: -75, y: -20 }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
                className="absolute z-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-[#051024] text-white shadow-xl transition-transform hover:scale-105"
              >
                <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
              </motion.a>
            </>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => {
            if (draggedRef.current) return;
            setOpen((v) => !v);
          }}
          aria-label={open ? "Close contact options" : "Open contact options"}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-[#051024] text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
        >
          <div className="pointer-events-none absolute right-[10px] top-[4px] h-4 w-6 rotate-[20deg] rounded-full border-r-[2.5px] border-t-[2.5px] border-white/70" />
          <motion.div
            initial={false}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Headset className="h-7 w-7" aria-hidden="true" />
            )}
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}
