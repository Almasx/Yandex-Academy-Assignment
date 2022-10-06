import { useLayoutEffect, useRef } from "react";
import {
  mobile1,
  mobile2,
  mobile3,
  mobile4,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
} from "../assets/images/image";

const MobileProject = () => {
  //   const downScroll = useRef<HTMLDivElement | null>(null);
  //   const topScroll = useRef<HTMLDivElement | null>(null);

  //   const onWheel = (event: WheelEvent) => {
  //     let y1: string = downScroll.current!.style.top;
  //     console.log(downScroll.current!.style, "lol");
  //     // downScroll.current!.style.top = `${
  //     //   parseInt(y1.slice(0, y1.length - 3)) + (event.deltaY < 0 ? -30 : 30) * 1.5
  //     // }px`;
  //     let y2: string = topScroll.current!.style.bottom;
  //     // topScroll.current!.style.bottom = `${
  //     //   parseInt(y2.slice(0, y2.length - 3)) + (event.deltaY < 0 ? -30 : 30) * 1.5
  //     // }px`;
  //   };

  //   useLayoutEffect(() => {
  //     window.addEventListener("wheel", onWheel);
  //     return () => window.removeEventListener("wheel", onWheel);
  //   }, []);

  return (
    <section className="grid grid-cols-12 px-32 h-screen py-24 ">
      <div className="col-span-4 col-start-2 flex flex-col pb-20 w-full h-full">
        <h1 className="font-bold text-7xl mb-12 z-10">Mobile development</h1>
        <p className="font-content text-white/33 z-10 uppercase font-light text-3xl">
          Profiecent in Flutter and designing UI for mobile applications. Using
          Flutter enabled to build app almost at no time esspesially considering
          it's large out-of-box library of widgets
        </p>
        <h3 className="text-white/66 text-5xl font-medium mb-2 mt-auto">
          #Flutter
        </h3>
        <h3 className="text-white/66 text-5xl font-medium">#Figma</h3>
      </div>
      <div className="col-span-5 col-start-7 grid grid-cols-2 gap-8 h-screen z-10 -mt-24 relative overflow-clip ">
        <div
          className="absolute top-0 bottom-0 right-0 left-0 z-20 "
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 13.14%, rgba(0, 0, 0, 0) 86.66%, #000000 100%);",
          }}
        ></div>
        <div
          className="flex-col flex flex-grow gap-8 relative animate-marquee-infinite3"
          //   ref={downScroll}
        >
          <img src={mobile1} className="w-full aspect-[3/7]" alt="" />
          <img src={mobile2} className="w-full aspect-[3/7]" alt="" />
          <img src={mobile3} className="w-full aspect-[3/7]" alt="" />
          <img src={mobile4} className="w-full aspect-[3/7]" alt="" />
        </div>

        <div
          className="flex-col flex flex-grow gap-8 relative animate-marquee-infinite4"
          //   ref={topScroll}
        >
          <img src={mobile5} className="w-full aspect-[3/7]" alt="" />
          <img src={mobile6} className="w-full aspect-[3/7]" alt="" />
          <img src={mobile7} className="w-full aspect-[3/7]" alt="" />
          <img src={mobile8} className="w-full aspect-[3/7]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default MobileProject;
