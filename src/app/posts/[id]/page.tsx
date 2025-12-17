
export default async function PostId({ params }: {
  params: Promise<{id: string}>
}) {

  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  let data = await res.json();

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  )
}