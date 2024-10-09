import Image from "next/image";
import Link from "next/link";

const Project = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="text-custom block rounded-lg shadow-lg p-6 bg-slate-100 hover:shadow-2xl hover:scale-105 transform transition-transform duration-300"
    >
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition duration-300"></div>
      </div>
      <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 hover:text-purple-600">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">{description}</p>
    </Link>
  );
};

export default Project;
