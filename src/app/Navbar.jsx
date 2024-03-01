import Link from "next/link";

export default function Navbar() {
    return (
      <div className=" flex justify-between px-24 py-6 shadow-md mb-3">
        <div>
          <p>Logo</p>
        </div>

        <div className=" flex  gap-20">
          <div  className=" flex  gap-20">
            <div className=" flex gap-4">
              <Link href="home">Home</Link>
              <Link href="home">About</Link>
              <Link href="home">portofolio</Link>
              <Link href="project">My Project</Link>
            </div>

            <Link href="contact">Contact</Link>
          </div>

          <Link href="login">Login</Link>
        </div>
      </div>
    );
}