import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from 'next/router';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSearch, FaSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from 'next-themes';


interface HeaderLinkProps {
  href: string;
  sectionId: string;
  children: React.ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, sectionId, children }) => {
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
    });

    if (router.pathname === '/' && sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
  const { theme, setTheme } = useTheme()


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

  const navItems = [
    { href: '/', sectionId: 'home', label: 'Home' },
    { href: '/', sectionId: 'about', label: 'About' },
    { href: '/', sectionId: 'skills', label: 'Skills' },
    { href: '/', sectionId: 'contact', label: 'Contact' },
    { href: '/project', sectionId: 'project', label: 'Projects' },
    { href: '/blog', sectionId: 'blog', label: 'Blog' },
  ];

  return (
    <header className={`p-4 ${isHeaderFixed ? 'fixed top-0 left-0 w-full z-50 shadow-md' : ''} ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <nav className="flex items-center justify-between">
        <div className="text-xl font-bold cursor-pointer px-4">
          <HeaderLink href="/" sectionId="home">My Portfolio</HeaderLink>
        </div>
        <ul className="hidden md:flex">
          {navItems.map((item, index) => (
            <li key={index} className='px-4'>
              {item.href.startsWith('/') ? (
                <Link href={item.href}>
                  <HeaderLink href={item.href} sectionId={item.sectionId}>
                    {item.label}
                  </HeaderLink>
                </Link>
              ) : (
                <HeaderLink href={item.href} sectionId={item.sectionId}>
                  {item.label}
                </HeaderLink>
              )}
            </li>
          ))}
           <button className="block py-2 pl-3 pr-4 rounded md:p-0" onClick={()=> setTheme( theme === "dark"? "light": "dark" )}>
              { theme==="dark"? <FaSun/>: <FaRegMoon/> }
              </button>
        </ul>
        <div onClick={()=>setHamBurger(!hamBurger)} className='cursor-pointer pr-4 text-gray-700 z-20 md:hidden'>
          {hamBurger ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {hamBurger && (
          <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 z-10 w-full h-screen ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
            {navItems.map((item, index) => (
              <li key={index} className='px-4 cursor-pointer capitalize py-3 text-2xl'>
                {item.href.startsWith('/') ? (
                  <Link href={item.href}>
                    <HeaderLink href={item.href} sectionId={item.sectionId}>
                      {item.label}
                    </HeaderLink>
                  </Link>
                ) : (
                  <HeaderLink href={item.href} sectionId={item.sectionId}>
                    {item.label}
                  </HeaderLink>
                )}
                
              </li>
              
            ))}
             <button className="block py-2 pl-3 pr-4 rounded md:p-0" onClick={()=> setTheme( theme === "dark"? "light": "dark" )}>
              { theme==="dark"? <FaSun/>: <FaRegMoon/> }
              </button>

          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
