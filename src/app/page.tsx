import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Test - Home",
  description: "Home page"
}

export default function Home() {
  return (
    <div>
      Home
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
