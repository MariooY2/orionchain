import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 bg-opacity-80 transition duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <a href="#home">
            <Image
              src="/logo.png"
              alt="OrionChain Logo"
              width={60}
              height={60}
            />
          </a>
          <span className="ml-2 text-2xl font-bold text-custom hidden lg:block">
            OrionChain
          </span>
        </div>

        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-lg text-custom hover:text-purple-950"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-lg text-custom hover:text-purple-950"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg text-custom hover:text-purple-950"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
