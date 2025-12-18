import { Suspense } from "react";
import { PostBody } from "./post-body";

export default async function PostId({ params }: {
  params: Promise<{id: string}>
}) {

  const { id } = await params;

  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="p-4 rounded-lg border border-gray-700">
        <Suspense fallback={<div>Loading post...</div>}>
          <PostBody id={id} />
        </Suspense>
      </div>
    </div>
  )
}