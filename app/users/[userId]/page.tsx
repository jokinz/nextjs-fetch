import { getPostsByUserId } from "@/utils/posts";
import { getAllUsers, getUserById } from "@/utils/users";
import React from "react";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUserById(userId);
  const user: User = await userData;
  if (!user) {
    return { title: "User not found" };
  }
  return {
    title: user.name,
    description: `${user.name}'s posts`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUserById(userId);
  const userPostsData: Promise<Post[]> = getPostsByUserId(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  if (!user) {
    return notFound();
  }
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ userId: user.id.toString() }));
}
