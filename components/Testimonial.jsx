"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";

export default function Testimonial() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "absolute",
          borderRadius: "100%",
          color: "#ef0909",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "absolute", color: "#ef0909" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div style={{ cursor: "grab" }} id="testimonial">
        <section className="py-16 bg-extraClr dark:bg-secondary xx:px-0 md:px-12">
          <div className=" m-auto  text-secondary dark:text-gray-300 xx:px-6 md:px-12 xl:px-6">
            <div className="mb-20 space-y-4 ss:px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Writing Can Save Lives
              </h2>
              <p className=" text-gray-800 dark:text-white text-center">
                If you’re wondering why you should go ahead and write, here’s
                your writing fire! Books can save lives. These are real people
                testifying of real impact.
              </p>
            </div>

            <div className=" relative slider-container">
              <Slider {...settings}>
                {/* tst 1 */}
                <div className="aspect-auto ss:p-8 xx:p-0 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Oluwakemi O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ....
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" ss:line-clamp-4 xx:line-clamp-5">
                      I read ‘Love, the Way to Victory’ by Kenneth E. Hagin and
                      it taught me what love really means. I learnt that Love is
                      a person and I can become that person. It changed my
                      perspective on how I see people. It taught me that there’s
                      a better way to dispense love to people—including people
                      who have hurt me.”",
                    </p>
                    <Link href="/testimonialPg">
                      <span className="text-accent">See More...</span>
                    </Link>
                  </div>
                </div>
                {/* tst2 */}
                <div className="aspect-auto ss:p-8 xx:p-0 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        adsfe
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ....
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" line-clamp-4 xx:line-clamp-5">
                      I read ‘Love, the Way to Victory’ by Kenneth E. Hagin and
                      it taught me what love really means. I learnt that Love is
                      a person and I can become that person. It changed my
                      perspective on how I see people. It taught me that there’s
                      a better way to dispense love to people—including people
                      who have hurt me.”",
                    </p>
                    <Link href="/testimonialPg">
                      <span className="text-accent">See More...</span>
                    </Link>
                  </div>
                </div>
                {/* tst 3 */}
                <div className="aspect-auto ss:p-8 xx:p-0 border h-full  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        goigcoi
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ....
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 bg-white  dark:bg-secondary ss:p-8 xx:p-4 rounded-lg content  ">
                    <p className=" line-clamp-4 xx:line-clamp-5">
                      I read ‘Love, the Way to Victory’ by Kenneth E. Hagin and
                      it taught me what love really means. I learnt that Love is
                      a person and I can become that person. It changed my
                      perspective on how I see people. It taught me that there’s
                      a better way to dispense love to people—including people
                      who have hurt me.”",
                    </p>
                    <Link href="/testimonialPg">
                      <span className="text-accent">See More...</span>
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
