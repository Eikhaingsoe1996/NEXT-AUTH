import { Head } from "next/document";
import Link from "next/link";

function Header() {
  return (
    <nav className="bg-blue-50 px-4 py-2 ">
      <div className="flex items-center justify-between">
        <h1>Auth Next</h1>
        <div>
          <ul className="flex items-center gap-5">
            <li>
              <Link  href="/" >
                    Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="#">Sign In</Link>
            </li>
            <li>
              <Link href="#">Sign Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
