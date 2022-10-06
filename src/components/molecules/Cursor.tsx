import clsx from "clsx";
import React, { useEffect, useLayoutEffect, useRef } from "react";

const Cursor = () => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const onMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;

    positionRef.current.mouseX = mouseX - cursor.current!.clientWidth / 2;
    positionRef.current.mouseY = mouseY - cursor.current!.clientHeight / 2;
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      cursor.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

  return (
    <div
      ref={cursor}
      className={clsx(
        "fixed top-0 left-0 rounded-full p-3 w-[152px] z-10",
        "h-[152px] border border-stroke-100 bg-black text-white/33 "
      )}
    >
      <div className="uppercase w-32 h-32 absolute animate-rotation">
        {"Never gonna give you up".split("").map((charecter, index) => (
          <span
            className="absolute left-[64px] text-xs"
            style={{
              transformOrigin: "0px 64px",
              transform: `rotate(${index * 15.4}deg)`,
            }}
          >
            {charecter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Cursor;
