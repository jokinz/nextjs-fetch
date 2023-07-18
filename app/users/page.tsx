import { getAllUsers } from "@/utils/users";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  console.log("users list")
  return (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
}
