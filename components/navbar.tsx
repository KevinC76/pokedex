'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import MobileMenu from './reusableComponents/mobile-menu';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-between items-center bg-red-pokemonball px-8 xl:px-64 ">
      {/* logo */}
      <Link href="/">
        <div>
          <Image
            width={100}
            height={100}
            src="/Logo.png"
            alt="Logo Image"
          ></Image>
        </div>
      </Link>
      {/* content */}

      <div className="hidden sm:flex gap-4 ">
        <Link
          href="/"
          className="text-xl text-white font-medium hover:underline"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-xl text-white font-medium hover:underline"
        >
          About
        </Link>
      </div>

      <div className="block sm:hidden" onClick={handleOpen}>
        <IoMenu color="#ffffff" size={32} />
      </div>

      <MobileMenu open={open} onClose={handleOpen} />
    </div>
  );
}

export default Navbar;
