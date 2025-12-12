import { contexts2 } from "@/constants/contexts2";

export const Main5 = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-24 pr-20 pl-20 pb-24 gap-y-12">
      <div className="flex flex-col items-center justify-between h-[72px]">
        <div className="flex items-center justify-center rounded-xl w-[115px] h-7 text-sm font-medium bg-gray-200">
          Work
        </div>
        <div className="flex w-xl h-7 text-xl font-normal items-center justify-center">
          Some of the noteworthy projects I have built:
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {contexts2.map(({ title, text, image, logo }, index) => (
          <div
            className="flex rounded-xl bg-gray-50 border border-white border-solid"
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className="flex justify-center items-center rounded-xl bg-gray-100 w-xl h-[480px]">
              <div className="w-[480px] h-96">
                <img className="max-w-none" src={image} alt="" />
              </div>
            </div>
            <div className=" flex flex-col gap-y-6 w-xl h-[480px] pt-12">
              <div className="text-xl font-semibold w-[480px] h-7 pl-12">
                {title}
              </div>
              <div className="pl-12 w-[480px] h-24">{text}</div>
              <div className="pl-12 w-[480px] h-[100px] space-x-2 space-y-2">
                <button className="w-[79px] h-7 rounded-xl bg-gray-200">
                  React
                </button>
                <button className="w-[87px] h-7 rounded-xl bg-gray-200">
                  Next.js
                </button>
                <button className="w-28 h-7 rounded-xl bg-gray-200">
                  Typescript
                </button>
                <button className="w-[87px] h-7 rounded-xl bg-gray-200">
                  Nest.js
                </button>
                <button className="w-[120px] h-7 rounded-xl bg-gray-200">
                  PostgreSQL
                </button>
                <button className="w-[119px] h-7 rounded-xl bg-gray-200">
                  Tailwindcss
                </button>
                <button className="w-[81px] h-7 rounded-xl bg-gray-200">
                  Figma
                </button>
                <button className="w-24 h-7 rounded-xl bg-gray-200">
                  Cypress
                </button>
                <button className="w-[110px] h-7 rounded-xl bg-gray-200">
                  Storybook
                </button>
                <button className="w-[60px] h-7 rounded-xl bg-gray-200">
                  Git
                </button>
              </div>
              <div className="pl-10">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
