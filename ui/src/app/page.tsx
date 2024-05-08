import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <h1>home page</h1>
      <Link href="/about" className='underline text-blue-500'>about page</Link>
    </div>
  );
}
