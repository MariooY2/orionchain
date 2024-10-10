"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/Explore1.svg", "/Explore2.svg", "/Explore3.svg"];

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <section
      id="home"
      className=" Hero text-white sm:mt-14 mt-24 min-h-screen flex justify-center items-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-center items-center">
            <div className="w-4/5">
              <h1 className="text-center md:text-6xl xs:text-4xl text-2xl font-bold mb-4 text-custom">
                OrionChain Is the Future of
                <span className="block text-center">Development</span>
              </h1>
              <p className="text-xl mb-6 text-black">
                Our mission is to empower businesses and developers by providing
                innovative website solutions and decentralized applications
                (DApps) that leverage cutting-edge blockchain technology. We are
                committed to breaking down barriers, fostering seamless digital
                experiences, and building a secure, trustless, and connected
                online environment.
              </p>
              <div className="flex items-center justify-center">
                <Link
                  href="#contact"
                  className="bg-custom hover:bg-pink-950 text-white py-5 px-7 rounded-full transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full mt-8 md:mt-0 justify-center flex">
          <div className="relative w-full h-96 image-container">
            <Image
              src={images[currentImage]} 
              alt="OrionChain Hero Image"
              fill
              className="object-fit moving-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
