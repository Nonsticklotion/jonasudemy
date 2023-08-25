import "./page.css";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <header className="header">
      <div className="logo-box">
        <Image
          src="/Natours/starter/img/logo-white.png"
          width="75"
          height="35"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="text-box">

      <h1 className="heading-primary">
        <span className="heading-primary-main">Outdoors</span>
        <span className="heading-primary-sub">is where life happens</span>
      </h1>
      <Link href="#" className="btn btn-white btn-animated">Discover our tours</Link>
      </div>
    </header>
  );
}
