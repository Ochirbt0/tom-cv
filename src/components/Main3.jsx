import { stack } from "@/constants/stack";
import { stack2 } from "@/constants/stack2";

export const Main3 = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-24 pr-20 pl-20 pb-24 gap-y-12">
      <div className="flex flex-col justify-between items-center h-[72px]">
        <div className=" flex w-[75px] h-7 bg-gray-200 text-sm rounded-xl justify-center items-center">
          Skills
        </div>
        <div className=" flex w-xl h-7 text-xl font-normal items-center justify-center">
          The skills, tools and technologies I am really good at:
        </div>
      </div>
      <div className="flex flex-col gap-y-12">
        <div className="flex gap-x-[86.8px]">
          {stack.map(({ image, title, width, widthImg }) => (
            <div
              className=" flex flex-col items-center justify-center gap-y-2 h-[100px]"
              style={{ width }}
            >
              <div className="h-16" style={{ width: widthImg }}>
                <img src={image} alt="" />
              </div>
              <div className="text-lg font-normal">{title}</div>
            </div>
          ))}{" "}
        </div>
        <div className="flex gap-x-[80.32px]">
          {stack2.map(({ image, title, width, widthImg }) => (
            <div
              className=" flex flex-col items-center justify-center gap-y-2 h-[100px]"
              style={{ width }}
            >
              <div className="h-16" style={{ width: widthImg }}>
                <img src={image} alt="" />
              </div>
              <div className="text-lg font-normal">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
