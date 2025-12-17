import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Test - Posts",
  description: "Post page"
}

export default function Posts() {
  return (
    <div>
      Posts
      <Link href="/">Home</Link>
    </div>
  )
}