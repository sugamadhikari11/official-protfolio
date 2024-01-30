// app/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold cursor-pointer">My Portfolio</div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <div className="hover:text-gray-300 cursor-pointer">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="hover:text-gray-300 cursor-pointer">About</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="hover:text-gray-300 cursor-pointer">Contact</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="hover:text-gray-300 cursor-pointer">Skills</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="hover:text-gray-300 cursor-pointer">Projects</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="hover:text-gray-300 cursor-pointer">Blog</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
