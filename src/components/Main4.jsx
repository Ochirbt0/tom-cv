import { contexts } from "@/constants/contexts";

export const Main4 = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-24 pr-20 pl-20 pb-24 bg-gray-50 gap-y-12">
      <div className="flex flex-col items-center justify-between h-[72px]">
        <div className="flex items-center justify-center rounded-xl w-[115px] h-7 text-sm font-medium bg-gray-200">
          Experience
        </div>
        <div className="flex w-xl h-7 text-xl font-normal items-center justify-center">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>
      <div className="space-y-12">
        {contexts.map(({ image, list, date, title }) => (
          <div className="flex justify-between rounded-xl h-full gap-y-4 bg-white w-4xl p-8">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="flex flex-col">
              <div className=" text-xl font-semibold ">{title}</div>
              <div className=" flex flex-col text-base font-normal w-[384px] gap-y-0.5 pl-4">
                <ul className="list-disc">
                  {list.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[146px] h-6">{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
