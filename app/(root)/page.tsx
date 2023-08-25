import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Threads Clone</h2>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
