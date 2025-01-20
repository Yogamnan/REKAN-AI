import { useState } from 'react';
import { Logo1 } from '../assets'
import {search} from '../assets';
import {row} from '../assets';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-montserrat bg-white shadow-md">
      <nav className="flex items-center justify-between px-5 sm:px-10 md:px-20 py-3 gap-4 flex-wrap relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo1} alt="Logo" className="w-[203px] h-[36.05px]" />
        </div>

        {/* Tombol Hamburger (Responsive) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#212121]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Navigasi */}
        <ul
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row list-none gap-5 sm:gap-10 absolute sm:relative top-full left-0 sm:top-auto sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent p-5 sm:p-0 shadow-md sm:shadow-none z-40`}
        >
          <li className="relative group">
            <a href="#home" className="text-[#212121] text-base transition-colors hover:text-[#5a55ff]">
              Beranda
            </a>
          </li>
          <li className="relative group">
            <a href="#produk" className="text-[#212121] text-base transition-colors hover:text-[#5a55ff] flex items-center">
              Produk
              <img src={row} alt="arrow" className="ml-1" />
            </a>
            <ul className="absolute left-0 top-full hidden w-40 bg-white list-none py-2 shadow-lg group-hover:block z-50">
              <li className="px-5 py-2 hover:text-[#5a55ff]">
                <a href="#produk1" className="text-[#212121]">Produk 1</a>
              </li>
              <li className="px-5 py-2 hover:text-[#5a55ff]">
                <a href="#produk2" className="text-[#212121]">Produk 2</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a href="#solusi" className="text-[#212121] text-base transition-colors hover:text-[#5a55ff] flex items-center">
              Solusi
              <img src={row} alt="arrow" className="ml-1" />
            </a>
            <ul className="absolute left-0 top-full hidden w-40 bg-white list-none py-2 shadow-lg group-hover:block z-50">
              <li className="px-5 py-2 hover:text-[#5a55ff]">
                <a href="#solusi1" className="text-[#212121]">Solusi 1</a>
              </li>
              <li className="px-5 py-2 hover:text-[#5a55ff]">
                <a href="#solusi2" className="text-[#212121]">Solusi 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#hubungi" className="text-[#212121] text-base transition-colors hover:text-[#5a55ff]">
              Hubungi Kami
            </a>
          </li>
        </ul>

        {/* Pencarian */}
        <div className="relative flex items-center gap-2 w-full sm:w-auto order-2 sm:order-none">
          <input
            type="text"
            placeholder="Pencarian..."
            className="w-full sm:w-[592px] h-12 px-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5a55ff]"
          />
          <button className="absolute right-4 sm:right-2 text-gray-500 hover:text-[#5a55ff]">
            <img src={search} alt="search" className="w-5 h-5" />
          </button>
        </div>

        {/* Tombol Konsultasi */}
        <button className="bg-[#DC0168] text-white px-5 py-2 text-sm font-bold rounded-md hover:bg-[#e6006e] transition order-3 sm:order-none w-full sm:w-auto mt-3 sm:mt-0">
          Konsultasi Gratis
        </button>
      </nav>
    </header>
  );
};

export default Header;
