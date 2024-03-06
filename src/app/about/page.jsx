export default function About() {
    return (
      <div>
        <div className=" flex flex-col gap-5">
          <p className=" flex justify-center font-bold text-emerald-400">
            ABOUT ME
          </p>
          <p className=" flex justify-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div className=" flex  gap-40 justify-center mt-7">
          <div className="l">
            <img src="/home.jpg" className=" h-[15rem] rounded-lg w-[18rem]" />
          </div>

          <div>
            <p className="">
              Iam Vincent Turikubwimana web designer and developer,
              <br /> today i focus on my education especially in software
              <br />
              development,
            </p>

            <button className=" mt-9  rounded-md bg-emerald-400 hover:bg-green-600 p-3">
              Dawnload My CV
            </button>
          </div>
        </div>
      </div>
    );
}