export async function PostBody({ id }: { id: string }) {

  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: 'force-cache',
    next: {
      revalidate: 10
    }
  });
  let data = await res.json();

  return (
    <>
      <h2 className="text-xl text-bold">{data.title}</h2>
      <p>{data.body}</p>
    </>
  )
}