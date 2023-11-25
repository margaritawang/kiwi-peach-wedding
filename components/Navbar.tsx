import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-center align-center mx-auto pt-5 pb-3">
      <div className="mx-5">
        <Link href="/">Home</Link>
      </div>
      <div className="mx-5">
        <Link href="/schedule">Schedule</Link>
      </div>
      <div className="mx-5">
        <Link href="/travel">Travel</Link>
      </div>
      <div className="mx-5">
        <a>Wedding Party</a>
      </div>
      <div className="mx-5">
        <a>FAQs</a>
      </div>
    </div>
  );
};
