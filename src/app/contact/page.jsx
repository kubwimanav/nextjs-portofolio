export default function Contact() {
    return (
      <div className=" flex flex-col gap-5 justify-center">
        <div className=" font-bold  flex justify-center text-emerald-400">
          CONTACT ME
          </div>
        <div className="  flex  justify-center gap-2">
          
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2042014.2644906435!2d30.067304!3d-1.575976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc7e0817e278b9%3A0x2e1d372b9292caae!2sByumba!5e0!3m2!1sen!2srw!4v1709229665557!5m2!1sen!2srw"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" h-[25rem] w-[35rem] rounded-md"
            ></iframe>
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