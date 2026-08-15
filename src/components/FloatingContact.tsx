"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Headset, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE_HREF = "tel:+971556371671";
const WHATSAPP_HREF = "https://wa.me/971556371671";

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
        className="pointer-events-auto absolute bottom-2 right-2 flex cursor-grab flex-col items-center gap-3 active:cursor-grabbing"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              key="actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <a
                href={PHONE_HREF}
                aria-label="Call us"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => {
            if (draggedRef.current) return;
            setOpen((v) => !v);
          }}
          aria-label={open ? "Close contact options" : "Open contact options"}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark active:scale-95"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Headset className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </motion.div>
    </div>
  );
}
