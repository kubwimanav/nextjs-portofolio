import Link from "next/link";

export default function Navbar() {
    return (
      <div className=" flex justify-between px-24 py-6 shadow-md mb-3">
        <div>
          <p>Logo</p>
        </div>

        <div className=" flex  gap-20">
          <div className=" flex  gap-20">
            <div className=" flex gap-4">
              <Link href="home" className=" hover:text-emerald-400">
                Home
              </Link>
              <Link href="about" className=" hover:text-emerald-400">
                About
              </Link>
              <Link href="home" className=" hover:text-emerald-400">
                portofolio
              </Link>
              <Link href="project" className=" hover:text-emerald-400">
                My Project
              </Link>
            </div>

            <Link href="contact" className=" hover:text-emerald-400">
              Contact
            </Link>
          </div>

          <Link href="login" className=" hover:text-emerald-400">
            Login
          </Link>
        </div>
      </div>
    );
}