import Project from "./Project";

const projects = [
  {
    image: "/Web3.png",
    title: "DApp Marketplace",
    description: "A Decentralized marketplace built on the sepolia testnet.",
    link: "https://web3-project1.vercel.app/",
  },
  {
    image: "/store.png",
    title: "E-Commerce Shop",
    description: "An online store built with modern eCommerce functionalities.",
    link: "https://store-three-ecru.vercel.app/",
  },
  {
    image: "/fithub.png",
    title: "Fitness Tracker",
    description:
      "A powerful and user-friendly fitness tracking app designed to help users monitor workouts, track progress, and set fitness goals. Built with speed, functionality, and a sleek interface for an optimal user experience.",
    link: "https://fit-hub-theta.vercel.app/",
  },
  {
    image: "/ptportfolio.png",
    title: "Personal Trainer Portfolio",
    description:
      "A sleek and professional portfolio showcasing personal training services, client testimonials, and fitness programs.",
    link: "https://pt-portfolio-seven.vercel.app/",
  },
  {
    image: "/sff.png",
    title: "SFF Ready - PC Case Tool",
    description:
      "A comprehensive tool to help users find the best PC cases for their setups.",
    link: "https://www.sffready.com/",
  },
  {
    image: "/kuartz.png",
    title: "Kuartz777 - Beauty Salon",
    description: "A beautifully designed website for a high-end beauty salon.",
    link: "https://www.kuartz777.com/",
  },

  {
    image: "/Mercedes-Shop.png",
    title: "Car Shop",
    description:
      "A sleek, fully responsive car shop website for showcasing and selling cars.",
    link: "https://car-shop-woad.vercel.app/",
  },
  {
    image: "/Uncoocked.png",
    title: "Uncooked - Web App",
    description:
      "A dynamic web app built with a focus on speed and functionality.",
    link: "https://www.uncooked.xyz/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-8">
          Previous Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
