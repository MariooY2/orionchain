import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { GrMailOption } from "react-icons/gr";
function Footer() {
  return (
    <footer id="contact" className="text-white py-10 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-row justify-around flex-wrap md:gap-0 gap-1 ">
          <div className="md:w-1/4 w-5/12 mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-2">OrionChain</h2>
            <p className="mb-4">Building the future.</p>
            <div className="w-full h-44 relative">
              <Image
                src="/logo.png"
                alt="OrionChain Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="md:w-1/4 w-5/12 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="#home" className="hover:text-purple-950">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#services" className="hover:text-purple-950">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#contact" className="hover:text-purple-950">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#projects" className="hover:text-purple-950">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-1/4 w-5/12 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-col gap-5 w-9">
              <a
                href="https://facebook.com"
                className="text-white hover:text-purple-950"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-purple-950"
              >
                <FaXTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white hover:text-purple-950"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/orion-chain"
                className="text-white hover:text-purple-950"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/4 w-5/12">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        
            <p className="mb-2 max-w-[250px] whitespace-normal break-words">
              orionchainagency@gmail.com
            </p>
            <div className="w-9 mb-6">
              <a
                href="mailto:orionchainagency@gmail.com"
                className="text-white hover:text-purple-950 "
              >
                <GrMailOption size={30} />
              </a>
            </div>
            <p className="max-w-[250px] whitespace-normal break-words">Whatsapp:+(961) 81381665</p>
            <div className="w-9">
            <a
              href=" https://wa.me/96181381665?text=I'm%20interested%20in%20your%20Services"
              className="text-white hover:text-purple-950"
            >
              <FaWhatsapp size={30} />
            </a></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center">
          &copy; {new Date().getFullYear()} OrionChain. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
