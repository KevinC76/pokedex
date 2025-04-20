import React from 'react';

function Footer() {
  return (
    <div className="bg-white w-full py-4 flex items-center justify-center p-8 sm:px-32 xl:px-64">
      <p className="font-medium text-lg">
        @{new Date().getFullYear()}. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
