import { NewUser } from "@/components/user/NewUser";
import { UserProfile } from "@/components/user/UserProfile";
import { prisma } from "@/lib/db";

export default async function User() {
  const users = await prisma.user.findMany();

  return (
    <main className=" flex min-h-screen justify-center items-center bg-slate-50 ">
      <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
        <NewUser />
      </div>
    </main>
  );
}