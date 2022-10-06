import clsx from "clsx";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  return (
    <nav
      className={clsx(
        className,
        "flex w-full flex-row items-center justify-between gap-10 border-b text-white text-base uppercase",
        "border-b-stroke-100 bg-black/80 px-5 py-3 backdrop-blur-2xl"
      )}
    >
      <p>Portfolio 2022</p>
      <p>Almas Saparov</p>
    </nav>
  );
};

export default Navigation;
