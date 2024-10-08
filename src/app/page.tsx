import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Landing from "./components/Landing/Landing";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    return <Landing />;
  }

  return redirect("/dashboard");
}
