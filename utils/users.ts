export async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("error fetching all users data");
  }
  return res.json();
}

export async function getUserById(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) {
    throw new Error("error fetching user data");
  }
  return res.json();
}
