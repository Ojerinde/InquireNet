import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaReact, FaNodeJs, FaCloud, FaLocationArrow } from "react-icons/fa";

import MainHeader from "@/components/Header/MainHeader";

const tracks = [
  {
    url: "/frontend",
    label: "Frontend",
    icon: <FaReact className="h-24 w-24 ml-2 fill-cyan-700" />,
  },
  {
    url: "/backend",
    label: "Backend",
    icon: <FaNodeJs className="h-24 w-24 ml-2 fill-green-700" />,
  },
  {
    url: "/cloud",
    label: "Cloud",
    icon: <FaCloud className="h-24 w-24 ml-2 fill-blue-700" />,
  },
];
const Home: React.FC = () => {
  return (
    <section className="bg-primary text-secondary_light">
      <MainHeader />
      <div className="pt-14 pb-8 flex justify-between items-center w-4/5 mx-auto my-0 ">
        <div className="basis-2/3">
          <ul className="flex flex-col">
            {tracks.map((track, index) => (
              <li key={index}>
                <Link
                  href={track.url}
                  className="flex justify-between items-center flex-row p-10 border-2 rounded-md border-primary_light w-3/4 my-8"
                >
                  <p className="text-5xl tracking-widest">
                    {track.label} Engineering
                  </p>
                  {track.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/3 flex flex-col justify-center items-center ">
          <figure className="home__user--figure">
            <Image
              src="/assets/dummy-user.png"
              alt="AltSchool"
              width={1000}
              height={1000}
              className="home__user--image"
            />
          </figure>
          <Link
            href="profile"
            className="flex justify-between bg-secondary bg-opacity-10  w-3/4 py-6 px-10"
          >
            <span className="text-3xl text-secondary_light tracking-wider">
              View Profile
            </span>
            <FaLocationArrow className="h-10 w-10 fill-secondary_light hover:fill-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
