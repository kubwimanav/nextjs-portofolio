export default function Contact() {
    return (
      <div className=" flex flex-col gap-5 justify-center">
        <div className=" font-bold  flex justify-center text-emerald-400">
          CONTACT ME
          </div>
        <div className="  flex  justify-center gap-2">
          
          <div>
           
          </div>
          <div>
            <p className=" font-bold font text-xl leading-3 mb-5">
              {" "}
              Contact Me Here!!
            </p>
            <form>
              <div className=" flex flex-col gap-1">
                <label>Full Name</label>
                <input
                  type="fullName"
                  className=" border-2  px-40 py-3 rounded-md"
                />
              </div>
              <div className=" flex flex-col gap-1">
                <label>Email</label>
                <input
                  type="email"
                  className=" border-2  px-35 py-3 rounded-md"
                />
              </div>

              <div className=" flex flex-col gap-1">
                <label>Meassage</label>
                <textarea className=" border-2  px-12 py-9  rounded-md" />
              </div>
              <button className="  px-60 py-2 rounded-md  mt-4 bg-emerald-400  hover:bg-green-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}