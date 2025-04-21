import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Side Menu */}
      <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg p-6 flex flex-col gap-6 z-50">
        <div className="flex justify-between items-center">
          <Image
            width={60}
            height={60}
            src="/Logo.png"
            alt="logo"
            className="invert"
          />
          <button
            onClick={onClose}
            className="text-black hover:text-red-500 transition"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 mt-4">
          <Link
            href="/"
            className="text-lg font-semibold text-white bg-red-pokemonball hover:bg-red-500 hover:text-white px-4 py-2 rounded-md transition"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-semibold text-white bg-red-pokemonball hover:bg-red-500 hover:text-white px-4 py-2 rounded-md transition"
            onClick={onClose}
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}
