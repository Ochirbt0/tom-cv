export const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center space-y-12 w-[1440px] h-[560px]">
      <div className="flex space-y-6 flex-col items-center justify-between h-[72px]">
        <div className="flex items-center justify-center rounded-xl w-[115px] h-7 text-sm font-medium bg-gray-200">
          Get in touch
        </div>
        <div className="flex w-xl h-7 text-xl font-normal items-center justify-center text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </div>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="flex justify-center items-center space-x-5 w-[436px] h-11">
          <img
            className="flex justify-center items-center"
            src="zahia.png"
            alt=""
            style={{ width: "32px", height: "32px" }}
          />
          <p className="flex justify-center items-center text-4xl font-semibold">
            Turuu@pinecone.mn
          </p>
          <img
            className="flex justify-center items-center"
            src="copy.png"
            alt=""
            style={{ width: "44px", height: "44px" }}
          />
        </div>
        <div>
          <div className="flex justify-center items-center space-x-5 w-[436px] h-11">
            <img
              className="flex justify-center items-center"
              src="utas.png"
              alt=""
              style={{ width: "32px", height: "32px" }}
            />
            <p className="flex justify-center items-center text-4xl font-semibold">
              +976 88112233{" "}
            </p>
            <img
              className="flex justify-center items-center"
              src="copy.png"
              alt=""
              style={{ width: "44px", height: "44px" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="text-base font-normal">
          You may also find me on these platforms!
        </div>
        <img
          src="Links.png"
          alt=""
          style={{ width: "116px", height: "36px" }}
        />
      </div>
    </div>
  );
};
