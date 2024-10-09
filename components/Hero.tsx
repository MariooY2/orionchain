import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="Hero text-white mt-14 min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="lg:w-1/2 w-full ">
          <div className="flex justify-center items-center">
            <div className="w-4/5">
              <h1 className="text-center md:text-6xl text-4xl font-bold mb-4 text-custom">
                OrionChain Is the Future of
                <span className="block text-center">Development</span>
              </h1>
              <p className="text-xl mb-6 font-bold">
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
                  className="bg-custom hover:bg-pink-950 text-white py-5 px-7 rounded-full transition duration-300 "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0  justify-center hidden lg:flex">
          <div className="relative w-[500px] h-[500px] rounded-full">
            <Image
              src="/image.png"
              alt="OrionChain Hero Image"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
