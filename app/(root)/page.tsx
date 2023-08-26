import { UserButton } from "@clerk/nextjs";

export const metadata = {
  title: "Threads",
  description: "A Social Media Platform",
};


export default function Home() {
  return (
    <div>
      <h2>Threads Clone</h2>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
