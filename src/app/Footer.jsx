export default function Footer() {
    return (
      <div>
        <div className=" flex justify-around bottom-2">
          <div>
            <p>About</p>
            <p className="  w-96">
              Although a text is often a quick way to discuss matters,
              recruiters are often busy with their full-time job. You might
              follow up after a week of no response, but being patient can show
              you have respect for their time.
            </p>
          </div>
          <div>
            <p>Navigation</p>
            <p>Home</p>
            <p>About</p>
            <p>Portofolio</p>
            <p>My projects</p>
            <p>Contact</p>
            <p>Login</p>
          </div>

          <div className="section">
            <p className="login"> Need Help ?</p>

            <div className="section-12">
              <div className="section-13">
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
              <div className="section-13">
                <p>Follow us</p>
                <div />
              </div>
            </div>
          </div>
        </div>
        <p  className=" flex justify-center py-4  top-px border-black">© 2024 Vincent Turikubwimana</p>
      </div>
    );
}