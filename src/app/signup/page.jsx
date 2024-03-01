export default function Signup() {
    return (
      <div>
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
            <input type="email" className=" border-2  px-12 py-2 rounded-md" />
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
            <select type="gender" className=" border-2  px-12 py-2 rounded-md">
              <option>Select Gender</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>

          <div className=" flex flex-col gap-1">
            <label> Age</label>
            <input type="age" className=" border-2  px-12 py-2 rounded-md" />
          </div>
          <button className=" border-2 px-12 py-2 rounded-md  bg-blue-50">
            Submit
          </button>
        </form>
      </div>
    );
}