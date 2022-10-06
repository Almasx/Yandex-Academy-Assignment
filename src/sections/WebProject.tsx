import React from "react";
import {
  web1,
  web2,
  web3,
  web4,
  web5,
  web6,
  web7,
} from "../assets/images/image";

const WebProject = () => {
  return (
    <section className="grid grid-cols-12 px-32 h-screen py-8 pb-20 relative overflow-clip ">
      <h1 className="font-bold text-7xl  z-10 col-span-10 col-start-2">
        Web projects
      </h1>
      <div className="col-span-10 col-start-2 grid grid-cols-2 gap-20">
        <WebProjectCard title="Manga Website" hashtag="#MERN" image={web1} />
        <WebProjectCard
          title="Real Estate Website"
          hashtag="#FIGMA"
          image={web5}
        />
      </div>
      <div
        className="absolute left-0 top-1/3 rotate-[-8deg]  bg-white gap-8 text-3xl uppercase 
        py-3 flex flex-row flex-nowrap  text-black font-bold -translate-x-10"
      >
        <div className="flex flex-row flex-nowrap justify-around animate-marquee-infinite w-screen">
          {Array(10).fill(<p className="whitespace-nowrap scale-x-[2]">web</p>)}
        </div>
        <div className="flex flex-row flex-nowrap justify-around animate-marquee-infinite2 w-screen">
          {Array(10).fill(<p className="whitespace-nowrap scale-x-[2]">web</p>)}
        </div>
      </div>
    </section>
  );
};

interface WebProjectCardProps {
  title: string;
  hashtag: string;
  image: string;
}

const WebProjectCard = ({ title, hashtag, image }: WebProjectCardProps) => {
  return (
    <div className="flex flex-col gap-5 relative z-10">
      <img src={image} alt="Couldn't load image" />
      <div className="flex flex-row uppercase font-content font-light text-3xl justify-between">
        <h6 className="text-white/33">{title}</h6>
        <h6 className="text-white font-medium">{hashtag}</h6>
      </div>
    </div>
  );
};

export default WebProject;
