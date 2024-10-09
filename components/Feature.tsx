import Image from "next/image";

const Feature = ({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="feature">
      <div className="flex justify-center mb-4">
        <div className="relative w-60 h-60 rounded-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default Feature;
