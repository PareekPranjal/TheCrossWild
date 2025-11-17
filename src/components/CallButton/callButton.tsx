"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="tel:+919529626262"
      className="fixed bottom-20 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-yellow-600"
    >
      <FaPhoneAlt size={24} />
    </a>
  );
}
