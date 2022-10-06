import React from "react";

const About = () => {
  return (
    <section className="font-bold text-9xl py-24 px-[15] grid grid-cols-12 z-10 relative">
      <p className="col-span-10 col-start-2">
        Hello ! I'm Almas, a 16 year-old chap from the west of Kazakhstan,
        currently{" "}
        <span className="text-stroke-white text-stroke-2 text-fill-transparent">
          improving
        </span>{" "}
        my technical skills on web development. Love to try new tech expanding
        knowledge horizon. Thanks to that i can build project from{" "}
        <span className="text-stroke-white text-stroke-2 text-fill-transparent">
          A to Z
        </span>
        . From designing UI's to building frontend interface, from building
        mobile apps to managing backend side of project.
      </p>
    </section>
  );
};

export default About;
