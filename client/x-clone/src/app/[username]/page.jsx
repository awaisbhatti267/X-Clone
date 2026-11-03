import { notFound } from "next/navigation";
import { users } from "@/data/mock-data/users";

const USERNAME_REGEX = /^[A-Za-z0-9_]{1,15}$/;

export default async function Profile({ params }) {
  const { username } = await params;

  if (!USERNAME_REGEX.test(username)) notFound();

  const user = users.find((u) => u.username === username.toLowerCase());
  if (!user) notFound();

  return <div className="p-4 text-xl font-bold">@{user.username}</div>;
}