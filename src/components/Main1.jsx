export const Main1 = () => {
  return (
    <div className="flex flex-col md:flex-row  md:w-full justify-between md:pr-20 md:pl-20 md:pt-24 md:pb-24">
      <div className="flex flex-col pr-4 pl-4 md:pr-0 md:pl-0 gap-y-12 md:w-full">
        <div className=" md:w-[600px] md:h-44 space-y-2 md:space-y-2 ">
          <div className="md:hidden flex justify-center items-center pt-16">
            <img src="/mobile turuu.png" alt="" className="h-[300px]" />
          </div>
          <div className=" font-bold w-[234px] h-10 md:w-[376px] md:h-[72px] text-4xl md:text-6xl">
            Hi, I'm Turuu
          </div>
          <div className="text-base md:text-base font-normal">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </div>
        </div>

        <div className="flex flex-col md:w-[600px] h-14">
          <div className="flex gap-x-2 items-center ">
            <div className=" flex w-6 h-6 items-center justify-center">
              <img src="tsegtei.png" alt="" />
            </div>
            <div>Ulaanbaatar, Mongolia</div>
          </div>
          <div className="flex gap-x-2 items-center ">
            <div className="w-6 h-6">
              <img src="icon.png" alt="" />
            </div>
            <div>Available for new projects</div>
          </div>
        </div>

        <div>
          <img src="links.png" alt="" />
        </div>
      </div>
      <div className="w-[320px] h-[360px] pb-10 hidden md:flex shrink-0">
        <img className="w-full h-full object-cover" src="/first.png" alt="" />
      </div>
    </div>
  );
};
