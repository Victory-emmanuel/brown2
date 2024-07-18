"use client";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function MyBook() {
  return (
    <>
      <div id="my-book">
        <section className="ss:py-24 xx:py-12 bg-primary dark:bg-secondary xx:px-0 ss:px-12">
          {/*   Books I've Worked On */}
          <div className="  mx-auto px-6 mb-8 md:px-12">
            <div className="text-center">
              <h2
                style={{
                  borderBottom: "2px solid #343434",
                  paddingBottom: "1rem",
                }}
                className=" mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl"
              >
                Books I've Worked On
              </h2>
            </div>

            <div className="grid gap-6 ss:px-4 xx:px-0 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div className="group relative rounded-3xl xx:w-full ss:space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/wjLvVbsj/20240218-134019.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl xx:mb-2  ss:mb-4 font-semibold dark:text-gray-700 text-white">
                      Precious Ayomikun
                    </h4>
                  </div>
                  <p className="mt-2 text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                    Precious Ayomikun carries the girl child in her thoughts —
                    in things she does, with the projects she embarks on, and
                    the places she volunteers in...{" "}
                    <ScrollLink
                      smooth={true}
                      duration={800}
                      href="/editing#a-gift-to-deborah"
                    >
                      <span className="text-semibold text-primary">
                        See More
                      </span>
                    </ScrollLink>
                  </p>
                </div>
              </div>

              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/xCxTCwBt/20240218-134201.jpg"
                  alt="Book cover"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl  xx:mb-2  ss:mb-4  font-semibold dark:text-gray-700 text-white">
                      Stephen Akintayo
                    </h4>
                  </div>
                  <p className="mt-2 text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                    The personnel in charge of getting Dr. Stephen Akintayo's
                    Billionaire Codes edited sought an editor who could cut out
                    repetitions, tighten every chapter, and sharpen the message.
                    ...
                    <ScrollLink
                      smooth={true}
                      duration={800}
                      href="/editing#billionaire-codes"
                    >
                      <span className="text-semibold text-primary">
                        See More
                      </span>
                    </ScrollLink>
                  </p>
                </div>
              </div>

              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/j2Bx6zxf/20240218-134232.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl xx:mb-2  ss:mb-4 font-semibold dark:text-gray-700 text-white">
                      Mayowa Owolabi
                    </h4>
                  </div>
                  <p className=" text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                    When this manuscript got to me, I was told it had been
                    edited already. I'll never be caught putting down another
                    person's work but to be professionally fair, this
                    manuscript, supposedly edited before getting to me,
                    surprised me...
                    <ScrollLink
                      smooth={true}
                      duration={800}
                      href="/editing#edusell"
                    >
                      <span className="text-semibold text-primary">
                        See More
                      </span>
                    </ScrollLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* My Books */}
          <div className="  mx-auto px-6 md:px-12">
            {/* <div className="text-center">
              <h2
                style={{
                  borderBottom: "2px solid #343434",
                  paddingBottom: "1rem",
                }}
                className=" mb-12 text-center text-2xl xx:hidden ss:inline-block font-bold text-secondary dark:text-white md:text-4xl"
              >
                My Books
              </h2>
            </div> */}

            <div className="my-16 items-center grid ss:grid-cols-2 xx:grid-cols-1">
              <h4 className=" text-2xl ss:block xx:hidden font-bold text-secondary dark:text-white md:text-2xl">
                MY BOOKS
              </h4>
              <div className="ss:justify-self-end xx:justify-self-center ">
                <Link href="/about">
                  <button className="relative ss:ml-6 xx:ml-0 ss:px-6 py-4 xx:px-16   text-secondary text-base font-bold nded-full overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                    ALL BOOKS
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid gap-6 ss:px-4 xx:px-0 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div className="group relative rounded-3xl xx:w-full ss:space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/X7HmPYNM/IMG-20220917-WA0018.webp"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl  xx:mb-2  ss:mb-6  font-semibold dark:text-gray-700 text-white">
                      Brown Patience
                    </h4>
                  </div>
                  <p className=" text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                    This is a book about porn addiction. About the darkness that
                    persists even after you've stopped viewing it.......
                    <ScrollLink
                      smooth={true}
                      duration={800}
                      href="/book#so-he-taught-me-no"
                    >
                      <span className="text-semibold text-primary">
                        See More
                      </span>
                    </ScrollLink>
                  </p>
                </div>
              </div>

              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/hGS5HP4L/20240207-064730.jpg"
                  alt="Book cover"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl  xx:mb-2  ss:mb-4  font-semibold dark:text-gray-700 text-white">
                      Brown Patience
                    </h4>
                  </div>
                  <p className=" text-primary dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                    Born to a man without warmth, Chimamanda is married off
                    early to a man she dreads just as much as her father. But
                    her walls are in place........
                    <ScrollLink
                      smooth={true}
                      duration={800}
                      href="/book#chimamanda"
                    >
                      <span className="text-semibold text-primary">
                        See More
                      </span>
                    </ScrollLink>
                  </p>
                </div>
              </div>

              <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
                <img
                  className="mx-auto h-full w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://i.postimg.cc/HxnPkZyj/20240207-064011.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-accent dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl  xx:mb-2  ss:mb-4  font-semibold dark:text-gray-700 text-white">
                      Brown Patience
                    </h4>
                  </div>
                  <p className=" text-primary  dark:text-gray-600 text-base xs:text-sm xx:text-xs">
                    Fantasy is about the sexual mental struggles we face. Those
                    steamy thoughts that feel like you're engaging in a porn
                    .....
                    <ScrollLink
                      smooth={true}
                      duration={800}
                      href="/book#fantasy"
                    >
                      <span className="text-semibold text-primary">
                        See More
                      </span>
                    </ScrollLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
