export const Header = () => {
  return (
    <div className="flex w-[375px] h[68px] p-4 fixed bg-white md:w-full justify-between md:pr-20 md:pl-20 md:pt-4 md:pb-4">
      <div className="font-bold w-[76px] h-9 text-3xl">Turuu</div>
      <div className="md:hidden">
        <img src="mobilebutton.png" alt="" className="w-9 h-9" />
      </div>
      <div className="gap-6 hidden md:flex">
        <div className="flex gap-6 items-center justify-center">
          <div className="w-[47px] h-6 text-base">About</div>
          <div className="w-10 h-6 text-base">Work</div>
          <div className="w-[97px] h-6 text-base">Testimonials</div>
          <div className="w-[62px] h-6 text-base items-center">Contact</div>
        </div>
        <div className="w-6 flex justify-center items-center">
          <img src="Divider.png" alt="" />
        </div>
        <div className="w-9 h-9">
          <img src="Icon Button.png" alt="" />
        </div>
        <button className=" w-[136px] h-9 bg-gray-900 text-white rounded-xl text">
          Download CV
        </button>
      </div>
    </div>
  );
};
