import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div id="footer">
        <footer className="w-full bg-extraClr dark:bg-[#111] xx:py-12 py-24 xx:px-0 px-12 ">
          <div className="ss:px-12 xx:px-6 lg:px-28">
            <div className=" m-auto space-y-6 text-secondary dark:text-primary">
              <div className="relative z-1 mb-12">
                <Link href={"/"} className="" aria-label="logo">
                  <h3 className="text-accent text-center xx:text-2xl ss:text-4xl ">
                    The Brown Patience Company
                  </h3>
                </Link>
                <p className="text-md xx:text-base xx:text-center ss:text-center ss:w-[75%] mx-auto pt-6 text-secondary dark:text-primary">
                  Get your message to the people in need of it. Many gifted
                  persons have a message for their world, books they've been
                  planning to write, a community they long to impact, but they
                  got stuck, couldn't find the time to continue, and began to
                  wonder if they'd ever share that message. The Brown Patience
                  Company exist to provide you all the help you need to share
                  the message you need to share.
                </p>
              </div>
              <ul className="flex flex-col items-center justify-center gap-4 py-6 sm:flex-row sm:gap-8">
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/editing"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/book"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/subs"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Subscription
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/community"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Community
                  </Link>
                </li>
              </ul>
              {/* " Dark mode" */}
              <div className="dark:block hidden">
                <div className="f-icon  pb-12 m-auto flex w-max items-center justify-between space-x-4">
                  <Link href="tel:+243996660436" aria-label="call">
                    <FaPhone className="text-primary" />
                  </Link>
                  <Link href="https://wa.me/message/DOCQNYXAEPVDH1">
                    <FaWhatsapp className="text-primary" />
                  </Link>
                  <Link
                    href={
                      "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"
                    }
                    title="facebook"
                    target="blank"
                    aria-label="facebook"
                  >
                    <FaFacebook className="text-primary" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/patience-brown-3430ba17a"
                    title="linkedin"
                    aria-label="linkedin"
                  >
                    <FaLinkedin className="text-primary" />
                  </Link>
                  <Link
                    href="https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"
                    title="instagram"
                    aria-label="instagram"
                  >
                    <FaInstagram className="text-primary" />
                  </Link>
                  <Link
                    href="https://twitter.com/ContentsbyBrown?s=09"
                    title="X"
                    aria-label="X"
                  >
                    <FaXTwitter className="text-primary" />
                  </Link>
                </div>
              </div>

              {/* Light mode */}
              <div className="dark:hidden block">
                <div className="f-icon  pb-12 m-auto flex w-max items-center justify-between space-x-4">
                  <Link href="tel:+243996660436" aria-label="call">
                    <FaPhone />
                  </Link>
                  <Link href="https://wa.me/message/DOCQNYXAEPVDH1">
                    <FaWhatsapp />
                  </Link>
                  <Link
                    href={
                      "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"
                    }
                    title="facebook"
                    target="blank"
                    aria-label="facebook"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/patience-brown-3430ba17a"
                    title="linkedin"
                    aria-label="linkedin"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"
                    title="instagram"
                    aria-label="instagram"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://twitter.com/ContentsbyBrown?s=09"
                    title="X"
                    aria-label="X"
                  >
                    <FaXTwitter />
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <span className=" text-sm tracking-wide">
                  Copyright © emmanuel <span id="year"></span> | All right
                  reserved
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
