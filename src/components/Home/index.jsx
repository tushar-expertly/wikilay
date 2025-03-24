import React from "react";
import Layout from "../layout";
import firstslidelabel from "../../Assets/sliderImage/firstslidelabel.jpg";

// import Slider from "../slider/slider";
// import startupPng from "../../Assets/startup.png";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import { Link } from "react-router-dom";
// import abouut from "../../Assets/logo/abouut.jpg";
// const ButtonArrow = () => {
//   return (
//     <svg
//       className="size-5 rtl:rotate-180"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M17 8l4 4m0 0l-4 4m4-4H3"
//       />
//     </svg>
//   );
// };

function Home() {
  return (
    <Layout>
      <div class="bg-gradient-to-b from-green-50 to-green-100">
        {/* <header class="">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
              <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
                  <img
                    class="w-auto h-8"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
                    alt=""
                  />
                </a>
              </div>

              <button
                type="button"
                class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  class="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  class="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#"
                  title=""
                  class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="#"
                  title=""
                  class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  href="#"
                  title=""
                  class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Resources{" "}
                </a>

                <a
                  href="#"
                  title=""
                  class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Pricing{" "}
                </a>

                <div class="w-px h-5 bg-black/20"></div>

                <a
                  href="#"
                  title=""
                  class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Log in{" "}
                </a>

                <a
                  href="#"
                  title=""
                  class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                  role="button"
                >
                  {" "}
                  Try for free{" "}
                </a>
              </div>
            </div>
          </div>
        </header> */}

        <section class="py-10 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  The Learning Landscape is Evolving, with
                  <div class="relative inline-flex">
                    <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 class="relative text-4xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text sm:text-6xl lg:text-7xl">
                      Wikilay.
                    </h1>
                  </div>
                </h1>

                <p class="mt-8 text-base text-black sm:text-xl">
                  Quick, focused, and built for the future. Elevate your skills
                  today with Wikilay!
                </p>

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <Link
                    to={"/training"}
                    title=""
                    class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    {" "}
                    Start exploring{" "}
                  </Link>
                  {/* 
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                  >
                    <svg
                      class="w-10 h-10 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#F97316"
                        stroke="#F97316"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch video
                  </a> */}
                </div>
              </div>

              <div>
                <img class="w-full" src={firstslidelabel} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        {/* <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">
              Fast. Focused. Future-Proof. Your Skills Upgrade Starts Here with
              Wikilay
            </h1>
            <p className="mt-4 text-xl">The Learning Landscape is Evolving.</p>
            <Link
              to={"/training"}
              className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </section> */}

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            {/* <p className="mt-4 text-gray-600">
              We offer amazing features that will help you to build a great
              website.
            </p> */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">
                  We're the Architects of Your Skill Journey.
                </h3>
                <p className="mt-4 text-gray-600">
                  Our team of industry veterans and learning experts curate a
                  dynamic library of online courses designed for speed and
                  impact. We understand your time is valuable, so we offer
                  microlearning modules that allow you to master in-demand
                  skills on-the-go.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">
                  Learning Made Memorable.
                </h3>
                <p className="mt-4 text-gray-600">
                  Forget about dry lectures and information overload. Our
                  courses are crafted to be engaging and interactive. We
                  leverage cutting-edge technologies like simulations,
                  gamification, and AI-powered assessments to create a truly
                  immersive learning experience.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">
                  More Than Just Courses.
                </h3>
                <p className="mt-4 text-gray-600">
                  We believe in fostering a supportive learning environment.
                  Connect with fellow learners in our vibrant online community,
                  ask questions directly from our instructors, and gain valuable
                  insights from industry experts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <Slider /> */}
    </Layout>
  );
}

export default Home;
