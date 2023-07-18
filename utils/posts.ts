export async function getPostsByUserId(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) {
    throw new Error("error fetching user posts");
  }
  return res.json();
}
