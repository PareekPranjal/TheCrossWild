"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Header = () => {
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);
  const phoneDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        phoneDropdownRef.current &&
        !phoneDropdownRef.current.contains(event.target)
      ) {
        setShowPhoneDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="w-full px-4">
          <div className="flex items-center justify-between">
            <div className="w-60 max-w-full xl:mr-12">
              <Link
                href="/"
                className={`header-logo block ${sticky ? "py-2" : "py-4"}`}
              >
                <Image
                  src="/images/logo/logo-crosswile.jpg"
                  alt="logo"
                  width={120}
                  height={24}
                  className="h-18 w-auto dark:hidden"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              {/* <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signin"
                  className="text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block dark:text-white"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
                <div>
                  <ThemeToggler />
                </div>
              </div> */}

              <div className="relative hidden items-center justify-end gap-6 pr-6 lg:flex lg:pr-0">
                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.facebook.com/thecrosswild/"
                    target="_blank"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
                  >
                    <FaFacebook size={22} />
                  </Link>
                  <Link
                    href="https://x.com/thecrosswild"
                    target="_blank"
                    className="text-gray-500 transition-colors duration-300 hover:text-sky-500"
                  >
                    <FaTwitter size={22} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/thecrosswildcompany/"
                    target="_blank"
                    className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
                  >
                    <FaInstagram size={22} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCiMxyFkSTrGDq_v9mRYwEZw"
                    target="_blank"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-600"
                  >
                    <FaYoutube size={22} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/unavailable/"
                    target="_blank"
                    className="text-gray-500 transition-colors duration-300 hover:text-blue-700"
                  >
                    <FaLinkedin size={22} />
                  </Link>
                  <Link
                    href="https://in.pinterest.com/thecrosswildcompany/"
                    target="_blank"
                    className="text-gray-500 transition-colors duration-300 hover:text-red-500"
                  >
                    <FaPinterest size={22} />
                  </Link>
                </div>

                {/* Divider */}
                <div className="hidden h-6 w-px bg-gray-300 lg:block"></div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4" ref={phoneDropdownRef}>
                  {/* Phone Round Button */}
                  <button
                    onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-400 hover:bg-gray-100"
                  >
                    <FiPhoneCall className="text-green-600" size={20} />
                  </button>

                  {/* Phone Dropdown */}
                  {showPhoneDropdown && (
                    <div className="absolute top-12 right-16 z-50 w-56 rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300">
                      <ul className="flex flex-col">
                        <li>
                          <a
                            href="tel:+919571815050"
                            className="block px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-green-600"
                          >
                            +91-9571815050
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+919529626262"
                            className="block px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-green-600"
                          >
                            +91-9529626262
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Email Round Button */}
                  <a
                    href="mailto:orders@thecrosswild.com"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-400 hover:bg-gray-100"
                  >
                    <FiMail className="text-blue-600" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
