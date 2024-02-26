import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from 'next/router';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSearch, FaSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface HeaderLinkProps {
  href: string;
  sectionId: string;
  children: React.ReactNode;
  closeMenu: () => void; // Callback function to close the menu
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, sectionId, children, closeMenu }) => {
  const router = useRouter();

  const scrollToSection = () => {
    router.events.on('routeChangeComplete', () => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      closeMenu(); // Close the menu after scrolling
    });

    if (router.pathname === '/' && sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMenu(); // Close the menu if on home page
    }

    router.push(href);
  };

  return (
    <div className="hover:text-gray-300 cursor-pointer" onClick={scrollToSection}>
      {children}
    </div>
  );
};

const Header: React.FC = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [hamBurger, setHamBurger] = useState(false);
  const { theme, setTheme } = useTheme();

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setHamBurger(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    setHamBurger(false);
  };

  const navItems = [
    { href: '/', sectionId: 'home', label: 'Home' },
    { href: '/', sectionId: 'about', label: 'About' },
    { href: '/', sectionId: 'skills', label: 'Skills' },
    { href: '/', sectionId: 'project', label: 'Projects' },
    { href: '/', sectionId: 'contact', label: 'Contact' },
    { href: '/blog', sectionId: 'blog', label: 'Blog' },
  ];

  return (
    <header className={`px-9 py-3 ${isHeaderFixed ? 'px-9 py-3 fixed top-0 left-0 w-full z-50 shadow-md' : ''} ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <nav className="flex items-center justify-between">
      <HeaderLink href="/" sectionId="home" closeMenu={closeMenu}>
      <div className="flex items-center text-xl font-bold cursor-pointer"> {/* Added flex container */}
      <img src="hero.png" alt="Logo" className="mr-2 w-12 h-12 border-2 border-solid rounded-full" />
      <h2>Sugam Adhikari</h2>
    </div>
      </HeaderLink>

        <ul className="hidden md:flex">
          {navItems.map((item, index) => (
            <li key={index} className='px-4'>
              {item.href.startsWith('/') ? (
                <Link href={item.href}>
                  <HeaderLink href={item.href} sectionId={item.sectionId} closeMenu={closeMenu}>
                    {item.label}
                  </HeaderLink>
                </Link>
              ) : (
                <HeaderLink href={item.href} sectionId={item.sectionId} closeMenu={closeMenu}>
                  {item.label}
                </HeaderLink>
              )}
            </li>
          ))}
          <button className="block py-2 pl-3 pr-4 mx-5 rounded md:p-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FaSun /> : <FaRegMoon />}
          </button>
        </ul>
        <div onClick={() => setHamBurger(!hamBurger)} className='cursor-pointer text-gray-700 z-50 md:hidden'>
          {hamBurger ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {hamBurger && (
          <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 z-30 w-full h-screen ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            {navItems.map((item, index) => (
              <li key={index} className='px-4 cursor-pointer capitalize py-3 text-2xl'>
                {item.href.startsWith('/') ? (
                  <Link href={item.href}>
                    <HeaderLink href={item.href} sectionId={item.sectionId} closeMenu={closeMenu}>
                      {item.label}
                    </HeaderLink>
                  </Link>
                ) : (
                  <HeaderLink href={item.href} sectionId={item.sectionId} closeMenu={closeMenu}>
                    {item.label}
                  </HeaderLink>
                )}

              </li>
            ))}
            <button className="block py-2 pl-3 pr-4 rounded md:p-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <FaSun /> : <FaRegMoon />}
            </button>

          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
