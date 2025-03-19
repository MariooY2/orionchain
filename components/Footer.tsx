"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMailOption } from "react-icons/gr";

function Footer() {
  return (
    <footer id="contact" className="text-white py-16 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">OrionChain</h2>
            <p className="text-white/80">
              Building the future of web development and blockchain technology.
            </p>
            <div className="w-full h-44 relative">
              <Image
                src="/logo.png"
                alt="OrionChain Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="h-1 w-1 bg-purple-400 rounded-full mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { Icon: FaFacebookF, href: "https://facebook.com" },
                { Icon: FaXTwitter, href: "https://twitter.com" },
                { Icon: FaInstagram, href: "https://instagram.com" },
                {
                  Icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/company/orion-chain",
                },
                {
                  Icon: FaWhatsapp,
                  href: "https://wa.me/96181381665?text=I'm%20interested%20in%20your%20Services",
                },
                {
                  Icon: GrMailOption,
                  href: "mailto:orionchainagency@gmail.com",
                },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-white/80 break-words">
              orionchainagency@gmail.com
            </p>
            <p className="text-white/80">Whatsapp: +(961) 81381665</p>
            <Button
              asChild
              className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 rounded-lg"
            >
              <a href="mailto:orionchainagency@gmail.com">Send Email</a>
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="text-center text-white/70">
          &copy; {new Date().getFullYear()} OrionChain. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
