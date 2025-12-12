export const Main2 = () => {
  return (
    <div className="flex flex-col h-[826px] bg-gray-50 justify-center items-center pt-24 pr-20 pl-20 pb-24">
      <div className=" flex items-center justify-center rounded-xl bg-gray-200 w-[105px] h-7">
        About me
      </div>
      <div className="flex">
        <div className="w-[460px] h-[300px] pr-10 pt-12">
          <img src="25LP7053.jpg" alt="" />
        </div>
        <div className="flex flex-col pl-8 gap-y-6 w-[584px] h-[498px]">
          <div className="pt-12 text-3xl font-semibold">
            Curious about me? Here you have it:
          </div>
          <div className="flex flex-col gap-y-4">
            <div>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </div>
            <div>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </div>
            <div>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </div>
            <div>Finally, some quick bits about me.</div>
            <div className=" flex w-[584px] h-[58px] pl-4 gap-x-2.5">
              <div className="flex flex-col w-[287px] h-[58px] gap-y-2.5">
                <li>
                  <ul>B.E. in Computer Engineering</ul>
                </li>
                <li>
                  <ul>Full time freelancer</ul>
                </li>
              </div>
              <div className="flex flex-col w-[287px] h-6">
                <li>
                  <ul>Avid learner</ul>
                </li>
              </div>
            </div>
            <div>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
