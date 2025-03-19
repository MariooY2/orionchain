import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const Project = ({ image, title, description, link }: ProjectProps) => {
  return (
    <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-purple-100">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-purple-700 transition-colors duration-300 group-hover:text-purple-600">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-purple-700/80">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-purple-50 text-purple-600 border-purple-300"
        >
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            Visit Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Project;
