import React from 'react';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="bg-gray-1100 overflow-y-scroll">
      {children}
      </body>
    </html>
  );
}
