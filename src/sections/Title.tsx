import React, { useLayoutEffect, useRef } from "react";
import pfp from "../assets/images/pfp.png";
import Button from "../components/atoms/Button";

const Title = () => {
  const rightScroll = useRef<HTMLDivElement | null>(null);
  const leftScroll = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    rightScroll.current!.style.left = `${window.scrollY * 1.5}px`;
    leftScroll.current!.style.left = `${-window.scrollY * 1.5}px`;
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="h-screen flex flex-col items-center gap-6 justify-center w-full relative overflow-hidden">
      <div className="h-10"></div>
      <img src={pfp} alt="lol" className="z-40 " />
      <h3 className="font-medium text-3xl text-center z-10">
        Almas Saparov 16 y.o <br /> from Uralsk
      </h3>
      <Button
        variant="secondary"
        className="text-xl font-normal upper z-100"
        onClick={() => {
          window.open(
            "mailto:Saparov_a6052@ura.nis.edu.kz?subject=subject&body=body"
          );
        }}
      >
        Get in touch
      </Button>

      <div className="flex flex-col gap-10 absolute top-1/2 -translate-y-1/2 ">
        <div
          ref={rightScroll}
          className="font-bold text-9xl whitespace-nowrap scale-x-150 relative"
        >
          Flutter React Flask Tensorflow UI/UX Expressjs
        </div>
        <div
          ref={leftScroll}
          className=" font-bold text-9xl whitespace-nowrap scale-x-150 relative"
        >
          Expressjs UI/UX Tensorflow Flask React Flutter
        </div>
      </div>

      <div className="absolute left-0 bottom-0  bg-white gap-8 uppercase py-3 flex flex-row flex-nowrap  text-black">
        <div className="flex flex-row flex-nowrap justify-around animate-marquee-infinite w-screen">
          {Array(9).fill(
            <p className="whitespace-nowrap">Available for projects</p>
          )}
        </div>
        <div className="flex flex-row flex-nowrap justify-around animate-marquee-infinite2 w-screen">
          {Array(9).fill(
            <p className="whitespace-nowrap">Available for projects</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Title;
