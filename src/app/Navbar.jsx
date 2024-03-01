import Link from "next/link";

export default function Navbar() {
    return (
      <div className=" flex justify-between px-24">
        <div>
          <p>Logo</p>
        </div>

        <div className=" flex  gap-20">
          <div  className=" flex  gap-20">
            <div className=" flex gap-4">
              <Link href="home">Home</Link>
              <Link href="home">About</Link>
              <Link href="home">portofolio</Link>
              <Link href="home">my project</Link>
            </div>

            <Link href="contact">Contact</Link>
          </div>

          <Link href="signup">Login</Link>
        </div>
      </div>
    );
}