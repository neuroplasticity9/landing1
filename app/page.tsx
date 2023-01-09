import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative">
      <Image src="/images/bgLanding.jpg" className="w-[100vw]" width={1920} height={4306} alt="" />

      <div className="space-y-10 text-white"></div>
    </div>
  );
}
