import React from "react";

const Awards = () => {
  return (
    <section className="min-h-screen overflow-clip flex-col flex justify-center items-center relative">
      <div
        className="absolute"
        style={{
          width: "1326.42px",
          height: "325.42px",
          right: "-163px",
          top: "400px",
          filter: "blur(20px)",
          transform: "rotate(-56.5deg)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.132) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      ></div>
      <div
        className="absolute"
        style={{
          width: "275.5px",
          height: "806.27px",
          left: "98px",
          top: "200px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.132) 0%, rgba(255, 255, 255, 0) 100%)",
          filter: "blur(20px)",
          transform: "rotate(-17.39deg)",
        }}
      ></div>
      <h1 className="font-bold text-9xl uppercase scale-x-[2]">Awards</h1>
      <div className="grid-cols-12 grid w-full mt-16">
        <div className="grid grid-cols-3 col-span-10 col-start-2 relative gap-16 px-16">
          <AwardCard
            title="Яндекс Лицей"
            content="Сертификат 2102 34796. Основы промышленного программирования"
            subtitle="Cуперотличник"
            date="2019-2021"
            link="https://infomatrix.asia/"
          />
          <AwardCard
            title="Infomatrix Asia"
            content="Международный турнир «Informatrix – Asia 2022» – традиционное
                       мероприятие на базе университета имени Сулеймана Демиреля. Взял место с проектом
                       RadiologistX - настольное приложение на А которое использует нейронную сеть для
                       вывода диагноза а также проглемного региона"
            subtitle="1 Place"
            date="8 June 2022"
            link="https://infomatrix.asia/"
          />
          <AwardCard
            title="Teenprenuership"
            content="Школьный ремпубликанкий инкубатора Teenpreneurs 
                       от столичного технопарка Astana Hub. Выиграли 
                       мобильном приложением нфт будильника с командой Lark"
            subtitle="1 Place"
            date="4 June 2022"
            link="https://astanahub.com/article/podvedeny-itogi-pervogo-shkolnogo-startap-inkubatora-teenpreneurs"
          />
          {/* {Background} */}
          <div className="absolute w-full flex flex-col bg-black top-1/2 -translate-y-1/2">
            {Array(3).fill(
              <div className=" flex-grow flex-row flex border border-stroke-100 ">
                {Array(4).fill(
                  <div className="border border-stroke-100 flex-grow h-32"></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface AwardCardProps {
  title: string;
  subtitle: string;
  date: string;
  content: string;
  link: string;
}

const AwardCard = ({
  title,
  subtitle,
  date,
  content,
  link,
}: AwardCardProps) => {
  return (
    <div
      className="border flex flex-col flex-grow border-stroke-100 gap-4 z-20 bg-black p-10 h-[600px] relative overflow-clip 
                    hover:scale-110 hover:border-white transition ease-in-out"
    >
      <svg
        width="123"
        height="259"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute -z-10"
        style={{
          width: "259px",
          height: "259px",
          left: "0px",
          top: "calc(50% - 259px/2 - 68.5px)",
        }}
      >
        <path
          d="M-6.5 0L12.4293 83.8007L85.0703 37.9297L39.1993 110.571L123 129.5L39.1993 148.429L85.0703 221.07L12.4293 175.199L-6.5 259L-25.4293 175.199L-98.0703 221.07L-52.1993 148.429L-136 129.5L-52.1993 110.571L-98.0703 37.9297L-25.4293 83.8007L-6.5 0Z"
          fill="#1B1B1B"
        />
      </svg>
      <svg
        width="223"
        height="362"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          width: "314.99px",
          height: "451.86px",
          right: "-50px",
          top: "250px",
          transform: "rotate(-23.69deg)",
        }}
      >
        <path
          d="M34.4558 335.256C56.965 321.482 101.296 303.241 147.002 266.386C192.707 229.532 209.256 183.72 262.982 150.984C316.708 118.248 385.102 112.36 415.632 102.704"
          stroke="#1B1B1B"
        />
        <path
          d="M37.7741 352.319C60.2833 338.545 104.615 320.304 150.32 283.45C196.025 246.595 212.575 200.784 266.301 168.047C320.027 135.311 388.42 129.424 418.95 119.768"
          stroke="#1B1B1B"
        />
        <path
          d="M41.0922 369.384C63.6014 355.61 107.933 337.369 153.638 300.514C199.344 263.66 215.893 217.848 269.619 185.112C323.345 152.376 391.738 146.488 422.268 136.832"
          stroke="#1B1B1B"
        />
        <path
          d="M44.4106 386.447C66.9198 372.673 111.251 354.432 156.957 317.578C202.662 280.723 219.211 234.912 272.937 202.175C326.663 169.439 395.057 163.552 425.587 153.896"
          stroke="#1B1B1B"
        />
        <path
          d="M47.7289 403.511C70.2382 389.737 114.57 371.496 160.275 334.642C205.98 297.787 222.53 251.976 276.256 219.239C329.982 186.503 398.375 180.616 428.905 170.96"
          stroke="#1B1B1B"
        />
        <path
          d="M51.0476 420.575C73.5568 406.801 117.888 388.559 163.594 351.705C209.299 314.851 225.848 269.039 279.574 236.303C333.3 203.566 401.694 197.679 432.224 188.023"
          stroke="#1B1B1B"
        />
        <path
          d="M54.3657 437.639C76.8749 423.865 121.206 405.623 166.912 368.769C212.617 331.915 229.166 286.103 282.892 253.367C336.618 220.63 405.012 214.743 435.542 205.087"
          stroke="#1B1B1B"
        />
      </svg>
      <header>
        <h6 className="text-2xl text-white/66">{date}</h6>
        <h2 className="text-6xl font-bold mb-1">{subtitle}</h2>
        <h3 className="text-3xl ">{title}</h3>
      </header>
      <p className="font-content text-white/33 uppercase font-light text-2xl">
        {content}
      </p>
      <div className="flex-grow"></div>
      <a href={link} className="text-2xl text-white/66">
        Ссылка
      </a>
    </div>
  );
};

export default Awards;
