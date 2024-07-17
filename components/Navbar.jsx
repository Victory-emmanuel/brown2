"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import logo2 from "@/assets/logoIcon.png";
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [subsOpen, setSubsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setActive(false);
    setServicesOpen(false);
    setSubsOpen(false);
  };

  const toggleMenu = () => {
    setActive(!active);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    if (!servicesOpen) setSubsOpen(false);
  };

  const toggleSubs = () => {
    setSubsOpen(!subsOpen);
    if (!subsOpen) setServicesOpen(false);
  };

  const link = [
    { page: "Home", href: "/" },
    {
      page: "Services",
      href: "#",
      dropdown: [
        { page: "Book Writing & Editing", href: "/editing" },
        { page: "Content Writing", href: "/contentWriting" },
        { page: "Coaching For Writers", href: "/coachingForWriters" },
      ],
    },
    { page: "About", href: "/about" },
    {
      page: "Subscriptions",
      href: "#",
      dropdown: [
        {
          page: "Guidance For Solopreneurs",
          href: "/guidianceForSolopreneur",
        },
        { page: "Coaching For Authors", href: "/coachingForAuthors" },
      ],
    },
    { page: "Books", href: "/book" },
    { page: "Blog", href: "/blog" },
    { page: "Community", href: "/community" },
  ];

  return (
    <>
      <div className="ss:px-12 xx:px-6 py-6 shadow-lg">
        <nav
          ref={navRef}
          id="nav"
          className="sticky bg-primary text-secondary z-10 top-0 grid xx:grid-cols-1 md:px-0 md:py-0 xs:py-[1.5rem] xs:px-[2rem] xx:p-[1rem] xs:p-0 md:gap-0 xx:gap-8 md:grid-cols-3"
        >
          <div>
            <Link href="/" onClick={closeMenu}>
              <Image
                className="w-[11rem] ss:flex xx:hidden mr-auto"
                src={logo}
                alt=""
              />
            </Link>
            <Link href="/" onClick={closeMenu}>
              <Image className="hidden w-[11rem]" src={logo2} alt="" />
            </Link>
          </div>
          {active ? (
            <IoCloseOutline
              className="md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent"
              onClick={toggleMenu}
            />
          ) : (
            <CiMenuFries
              className="md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent"
              onClick={toggleMenu}
            />
          )}
          <div
            className={`${
              active ? "flex" : "hidden"
            } md:flex md:flex-row xx:flex-col md:py-0 xx:py-[2rem] lg:gap-8 xx:gap-4 m-auto relative`}
          >
            {link.map((linkItem) => (
              <div key={linkItem.page} className="relative">
                {linkItem.dropdown ? (
                  <>
                    <span
                      onClick={
                        linkItem.page === "Services"
                          ? toggleServices
                          : toggleSubs
                      }
                      className="md:text-base xx:text-[1.5rem] lg:pt-0 sm:pt-[2rem] md:p-0 xx:p-[1rem] block xx:text-center duration-200 hover:text-accent text-secondary font-semibold cursor-pointer"
                    >
                      {linkItem.page}
                    </span>
                    <div
                      className={`${
                        (linkItem.page === "Services" && servicesOpen) ||
                        (linkItem.page === "Subscriptions" && subsOpen)
                          ? "block"
                          : "hidden"
                      } absolute bg-primary z-20 mt-2 rounded-md shadow-lg w-[15rem]`}
                    >
                      {linkItem.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.page}
                          href={dropdownItem.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-secondary hover:bg-secondary hover:text-primary"
                        >
                          {dropdownItem.page}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={linkItem.href}
                    className="md:text-base xx:text-[1.5rem] lg:pt-0 sm:pt-[2rem] md:p-0 xx:p-[1rem] block xx:text-center duration-200 hover:text-accent text-secondary font-semibold"
                    onClick={closeMenu}
                  >
                    {linkItem.page}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

// const Logo2 = styled.img`
//   display: none;
//   margin: auto 0;

//   @media (max-width: 600px) {
//     display: block;
//     width: 4rem;
//   }
//   @media (max-width: 400px) {
//     display: block;
//     width: 2.5rem;
//   }
// `;

// const NavWrapper = styled.nav`
//   grid-template-columns: 20% 70% 10%;
//   @media (max-width: 400px) {
//     padding: 1rem;
//   }
// `;
