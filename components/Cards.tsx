import { CiChat2 } from "react-icons/ci";
import { HoverEffect } from "./ui/card-hover-effect";
import { BsListTask } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-8xl mt-12 mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    logo: <CiChat2 className="text-3xl text-blue-500" />,
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    logo: <BsListTask className="text-3xl text-blue-500" />,
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    logo: <AiOutlineAppstore className="text-3xl text-blue-500" />,
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    logo: <AiOutlineLike className="text-3xl text-blue-500" />,
  },
];
