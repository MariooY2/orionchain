import Feature from "./Feature";

const features = [
  {
    src: "/webdev.webp",
    alt: "Web Development",
    title: "Web Development",
    description:
      "Build modern, scalable websites with our web development solutions.",
  },
  {
    src: "/webdesign.webp",
    alt: "Web Design",
    title: "Web Design",
    description:
      "Get professional web design services that offer user-friendly and visually appealing interfaces tailored for Web3 projects.",
  },
  {
    src: "/customer.webp",
    alt: "Customer Support",
    title: "Customer Support",
    description:
      "Our dedicated team offers customer support to assist you with any issues and ensure smooth operation of your solutions.",
  },
  {
    src: "/decentralized-solutions.webp",
    alt: "Decentralized Solutions",
    title: "Decentralized Solutions",
    description:
      "Secure, trustless, and decentralized solutions for businesses and developers to integrate blockchain technology.",
  },
  {
    src: "/smartcontracts.webp",
    alt: "Smart Contracts",
    title: "Smart Contracts",
    description:
      "Automate business processes with our reliable, tamper-proof smart contract solutions.",
  },
  {
    src: "/consulting.webp",
    alt: "Blockchain Consulting",
    title: "Blockchain Consulting",
    description:
      "Leverage our expertise to navigate the complex world of blockchain and ensure successful implementation.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature
              key={index}
              src={feature.src}
              alt={feature.alt}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
