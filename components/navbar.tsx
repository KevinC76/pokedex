import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#ff3f41] px-64 ">
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
      <div className="flex gap-4">
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
    </div>
  );
}

export default Navbar;
