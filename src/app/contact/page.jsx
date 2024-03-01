export default function Contact() {
    return (
      <div className=" flex justify-center">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2042014.2644906435!2d30.067304!3d-1.575976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc7e0817e278b9%3A0x2e1d372b9292caae!2sByumba!5e0!3m2!1sen!2srw!4v1709229665557!5m2!1sen!2srw"
            width="600"
            allowfullscreen=""
            loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className=" h-[25rem]"
          ></iframe>
        </div>
        <form className="  bg-gray-100  px-16 py-10">
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
            <label>Meassage</label>
            <textarea
              className=" border-2  px-12 py-5  rounded-md"
            />
          </div>
          <button className=" border-2 px-12 py-2 rounded-md  bg-blue-50">
            Submit
          </button>
        </form>
      </div>
    );
}