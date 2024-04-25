import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className=" shadow-inner shadow-slate-200 mt-3">
      <div className=" flex justify-around bottom-2 border-black border-b-[1px] pt-3 pb-3 ">
        <div>
          <p className="  mb-2"> About</p>
          <p className="  w-96">
            Although a text is often a quick way to discuss matters, recruiters
            are often busy with their full-time job. You might follow up after a
            week of no response, but being patient can show you have respect for
            their time.
          </p>
        </div>
        <div>
          <p className=" mb-2">Navigation</p>
          <p>Home</p>
          <p>About</p>
          <p>Portofolio</p>
          <p>My projects</p>
          <p>Contact</p>
          <p>Login</p>
        </div>

        <div>
          <p className=" mb-2"> Need Help ?</p>

          <div className=" flex flex-col gap-1">
            <div>
              <p>Call Us</p>
              <p>+250789466837</p>
            </div>
            <div className="section-13">
              <p>Email for Us</p>
              <p>holidayplanners@gmail.com</p>
            </div>
            <div className="section-13">
              <p>Location</p>
              <p>Main Street, Victoria 8007.</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <p>Navigation</p>
          <div>
            <input
              placeholder="Enter Email"
              className="  w-28 h-8 p-1 rounded-md  border-2"
            ></input>
            <button
              type="submit"
              className="  h-8 p-1 rounded-md bg-emerald-400   hover:bg-green-600"
            >
              Subscribe
            </button>
          </div>
          <div className=" flex gap-6">
            <FaSquareWhatsapp />
            <FaSquareInstagram />
            <FaXTwitter />
          </div>
        </div>
      </div>
      <p className=" flex justify-center py-4  top-px ">
        © 2024 Vincent Turikubwimana
      </p>
    </div>
  );
}
