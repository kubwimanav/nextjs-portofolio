export default function Project() {
  return (
    <div className=" flex flex-col gap-5">
      <div className=" flex  flex-col gap-5 ">
        <p className=" flex justify-center font-bold text-emerald-400">
          MY PROJECTS
        </p>
        <p className=" flex justify-center">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className=" flex justify-center gap-5">
        {" "}
        <img
          src="/project-1.jpg.webp"
          className=" w-[16rem]  h-[13rem] rounded-2xl"
        />
        <img
          src="/project-4.jpg.webp"
          className=" w-[16rem] h-[13rem] rounded-2xl"
        />
        <img
          src="/project-5.jpg.webp"
          className=" w-[16rem] h-[13rem] rounded-2xl"
        />
        <img
          src="/project-5.jpg.webp"
          className=" w-[16rem] h-[13rem] rounded-2xl"
        />
      </div>
      <div className=" flex justify-center gap-5">
        {" "}
        <img
          src="/project-1.jpg.webp"
          className=" w-[16rem] h-[13rem] rounded-2xl"
        />
        <img
          src="/project-4.jpg.webp"
          className=" w-[16rem] h-[13rem] rounded-2xl"
        />
        <img
          src="/project-5.jpg.webp"
          className=" w-[16rem] h-[13rem] rounded-2xl"
        />
        <img
          src="/project-5.jpg.webp"
          className=" w-[16rem] h-[13rem] rounded-2xl"
        />
      </div>
    </div>
  );
}
