import Link from "next/link";

export default function Login() {
    return (
      <div className=" flex justify-center">
        <div className=" flex  gap-2 shadow-md p-10">
          <div className=" flex  flex-col gap-2">
            <p className=" font-bold font text-xl"> Login Here!!!</p>
            <form className=" flex  flex-col gap-1">
              <div className=" flex flex-col">
                <label>fullName</label>
                <input
                  type="text"
                  className=" w-24   px-[12.2rem]  border-2 py-2 rounded-md"
                />
              </div>
              <div className=" flex flex-col">
                <label>password</label>
                <input
                  type="text"
                  className=" w-24 px-[12.2rem] border-2 py-2 rounded-md"
                />
              </div>
              <p>Forget You Password??</p>
              <button className="  px-44 py-2 rounded-md  mt-3 bg-emerald-400  hover:bg-green-600">
                Signin
              </button>
              <p className=" mt-3">
                If You Donot Have Account Please{" "}
                <Link href="signup" className=" text-orange-400">
                  Signup here!!
                </Link>{" "}
              </p>
            </form>
          </div>
          <div>
            <img src="/login.jpg" className=" w-[18rem] h-[18.5rem]" />
          </div>
        </div>
      </div>
    );
}