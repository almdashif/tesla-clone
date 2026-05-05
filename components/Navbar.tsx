'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [{ name: 'Vehicles', link: 'cars' }, { name: 'Energy', link: '#' }, { name: 'Charging', link: '#' }, { name: 'Discover', link: '#' }]

export default function Navbar({ page = '' }: { page?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(page == 'cars' ? true : false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20; // threshold
      if (page == 'cars') { setScrolled(true); return }
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex ${scrolled ? "bg-white text-black" : "bg-transparent text-white"} items-center justify-between px-6 md:px-8 h-[56px]`}>
        {/* Tesla Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 342 35"
            className="h-[18px] w-auto fill-white"
            aria-label="Tesla"
          >
            <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
          </svg>
        </Link>

        {/* Desktop Nav Links - Center */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((val, i) => (
            <Link
              key={i}
              href={val?.link?.startsWith("/") ? val.link : `/${val.link}`}
              className={`nav-link ${scrolled ? "text-black" : "text-white"}`}
            >
              {val?.name ?? ''}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-1">
          {/* Globe Icon */}
          <button className="nav-link p-2 rounded-full" aria-label="Language">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className={`w-5 h-5 ${scrolled ? "text-black" : "text-white"}`}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
          {/* Account Icon */}
          <button className="nav-link p-2 rounded-full" aria-label="Account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className={`w-5 h-5 ${scrolled ? "text-black" : "text-white"}`}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`w-5 h-[2px] ${scrolled ? "bg-black" : "bg-white"} block`} />
            <span className={`w-5 h-[2px] ${scrolled ? "bg-black" : "bg-white"} block`} />
            <span className={`w-5 h-[2px] ${scrolled ? "bg-black" : "bg-white"} block`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-[56px] border-b border-gray-100">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 342 35"
                className="h-[18px] w-auto fill-[#171A20]"
              >
                <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 7-7h-31.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v7h26.8l-26.8 18v9.8h38.3a9.8 9.8 0 0 0 7.1-7h-33.7l19-21zm-68.6 28h6.8V0h-6.8v34.8zM60.1 7.2h20.8a9.8 9.8 0 0 0 7.1-7.1H53a9.8 9.8 0 0 0 7.1 7.1zm-.1 13.8H81a9.8 9.8 0 0 0 7-7H53a9.8 9.8 0 0 0 7 7zm0 13.8H81a9.8 9.8 0 0 0 7-7H53a9.8 9.8 0 0 0 7 7z" />
              </svg>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-[#171A20]"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col px-8 py-6 gap-2">
            {navLinks.map((val,i) => (
              <Link
                key={val?.name ?? i}
                href={val?.link?.startsWith("/") ? val.link : `/${val.link}`}

                className="text-[#171A20] font-medium text-lg py-3 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {val?.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <button className="flex items-center gap-3 text-[#393C41] py-2 text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Language
              </button>
              <button className="flex items-center gap-3 text-[#393C41] py-2 text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
