export default function Home() {
    return (
      <div className=" flex justify-center gap-10">
        <div className="  pt-24 flex flex-col  gap-28">
          <div className=" flex flex-col gap-2">
            <p className=" font-bold">UI/UX Design && Software Developer</p>
            <p>Hi, I am Vincent, Focusing On</p>
            <p>Creating Emotional</p>
            <p>Experiences</p>
          </div>
          <div>
            <button className="px-44 py-2 rounded-md  mt-3 bg-emerald-400  hover:bg-green-600">
              Get in Touch
            </button>
          </div>
        </div>
        <div>
          <img src="/home.jpg" className=" w-[25rem] h-[25rem] rounded-2xl" />
        </div>
      </div>
    );
}