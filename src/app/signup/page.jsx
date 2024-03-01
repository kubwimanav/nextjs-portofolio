import Link from "next/link";

export default function Signup() {
    return (
      <div className=" flex justify-center ">
        <div className=" flex  gap-2  shadow-md px-12 py-7">
          <div>
            <p className=" font-bold font text-xl mb-7"> Create Account Here!!!</p>
            <form>
              <div className=" flex flex-col gap-1">
                <label>Full Name</label>
                <input
                  type="fullName"
                  className=" border-2  px-28 py-2 rounded-md"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label>Email</label>
                <input
                  type="email"
                  className=" border-2  px-12 py-2 rounded-md"
                />
              </div>

              <div className=" flex flex-col gap-1">
                <label>Phone Number</label>
                <input
                  type="phoneNumber"
                  className=" border-2  px-12 py-2 rounded-md"
                />
              </div>

              <div className=" flex flex-col gap-1">
                <label>Country</label>
                <input
                  type="country"
                  className=" border-2  px-12 py-2 rounded-md"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label>Gender</label>
                <select
                  type="gender"
                  className=" border-2  px-12 py-2 rounded-md"
                >
                  <option>Select Gender</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div>
              <button className="   px-48 py-2 rounded-md  mt-3 bg-emerald-400  hover:bg-green-600">
                Signin
              </button>
            </form>
            <p className=" mt-3">
              If You Donot Have Account Please{" "}
              <Link href="login" className=" text-orange-400">
                Login here!!
              </Link>{" "}
            </p>
          </div>
          <img src="/login.jpg" className=" w-[25rem] h-[30rem]" />
        </div>
      </div>
    );
}