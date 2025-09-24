import BlurDiv from "./BlurDiv";

export default function Hero() {
  return (
    <main className="bg-[#0A0A0A] h-screen flex items-center font-lato">
      <section className="md:w-[1280px] w-full md:h-[670px] mx-auto border border-white/5 p-2.5">
        <div className="h-full border border-[#333333] p-2.5 rounded-[10px] m-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          <div className="w-[420px] space-y-8">
            <BlurDiv className="w-fit rounded-full">
              <h2 className="text-white text-center text-[1rem] bg-[#EA763F1A] py-1.5 px-3.5 ">
                Crafted by Top Engineers
              </h2>
            </BlurDiv>
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-[#EA763F] block">ONE-STOP Platform!</span>
              All Your Prep in One Place One Plan, Zero Stress
            </h1>
            <p className="text-[#A3A3A3] text-[1rem] leading-[1rem]">
              The most trusted platform for engineers to up-skill and crack tech
              interviews in the least time
            </p>
            <div className="flex gap-2.5 items-center text-[16px]">
              <BlurDiv className="rounded-[10px]">
                <button
                  className="min-w-[147px] text-[#A3A3A3] border-s-stone-50  rounded px-3.5 py-[13px] cursor-pointer"
                  type="button"
                >
                  Explore offerings
                </button>
              </BlurDiv>
              <BlurDiv className="rounded-[10px]">
                <button
                  className="min-w-[147px] cursor-pointer  text-white bg-[#FFFFFF1A] px-3.5 py-[13px]"
                  type="button"
                >
                  Buy Now
                </button>
              </BlurDiv>
            </div>
          </div>
          {/*2nd Image*/}
          <BlurDiv className="rounded-[10px]">
            <div className="md:w-[648px] p-2.5 relative">
              <img src="hero.png" alt="Hero" className="rounded-lg" />
              <h2 className="mt-5 mb-2.5 h-6 text-white text-xl font-normal flex items-center justify-between">
                TUF+ Demo - One Stop Prep Platform!
                <SvgButton />
              </h2>
              <YTButton></YTButton>
            </div>
          </BlurDiv>
        </div>
      </section>
    </main>
  );
}

function SvgButton() {
  return (
    <BlurDiv className="size-7 rounded-full flex items-center justify-center">
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        className="size-4 rounded-full cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Login</title>
        <path
          d="M12 5.00001L7.33333 0.333344V3.00001C2.66667 3.66668 0.666667 7.00001 0 10.3333C1.66667 8.00001 4 6.93334 7.33333 6.93334V9.66668L12 5.00001Z"
          fill="#A3A3A3"
        />
      </svg>
    </BlurDiv>
  );
}

function YTButton() {
  return (
    <div className="cursor-pointer absolute inset-0 flex flex-col items-center justify-center">
      <div className="relative size-28 flex items-center justify-center">
        <div className="absolute  inset-0 bg-white blur-lg flex items-center justify-center"></div>
        <YTIcon></YTIcon>
      </div>
      <BlurDiv className="rounded-[10px]">
        <button
          className="text-black bg-[rgba(255,0,0,0.1)] py-3 px-5"
          type="button"
        >
          Watch Now
        </button>
      </BlurDiv>
    </div>
  );
}

function YTIcon() {
  return (
    <svg
      className="absolute z-10"
      width="68"
      height="48"
      viewBox="0 0 68 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>youtube</title>
      <g clipPath="url(#yt)">
        <path
          d="M66.4919 7.48667C66.1019 6.03961 65.3412 4.72038 64.2856 3.66034C63.2299 2.6003 61.9162 1.83643 60.4751 1.4448C55.1992 0 33.9655 0 33.9655 0C33.9655 0 12.7308 0.0437332 7.45497 1.48853C6.01384 1.88019 4.70003 2.6441 3.64438 3.70419C2.58872 4.76428 1.82806 6.08357 1.43814 7.53067C-0.157686 16.9435 -0.776737 31.2864 1.48196 40.3227C1.87192 41.7697 2.6326 43.0889 3.68825 44.149C4.7439 45.209 6.05769 45.9729 7.49879 46.3645C12.7747 47.8093 34.0088 47.8093 34.0088 47.8093C34.0088 47.8093 55.2427 47.8093 60.5183 46.3645C61.9595 45.9729 63.2733 45.2091 64.329 44.149C65.3847 43.089 66.1454 41.7697 66.5354 40.3227C68.2186 30.8965 68.7373 16.5624 66.4919 7.48667Z"
          fill="#FF0000"
        />
        <path
          d="M27.2069 34.1493L44.8218 23.9045L27.2069 13.6597V34.1493Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="yt">
          <rect width="68" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
