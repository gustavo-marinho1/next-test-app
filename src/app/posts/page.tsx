import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Test - Posts",
  description: "Post page"
}

interface Response {
  posts: any[]
}

export default async function Posts() {

  async function getPosts() {
    const res = await fetch("https://dummyjson.com/posts");
    const data: Response = await res.json();
    return data.posts;
  }

  const posts: any[] = await getPosts();

  return (
    <div className="flex flex-col gap-2 p-8">

      <h2>Posts</h2>

      <div className="flex flex-col gap-4">
        {posts.map((post: any) => (
          <div key={post.id} className="p-2 bg-gray-800 rounded-md text-white">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-600">See more details</Link>
          </div>
        ))}
      </div>

    </div>
  )
}