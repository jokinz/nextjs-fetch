export async function getPostsByUserId(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    //show the data for 60 sec before revalidating
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
