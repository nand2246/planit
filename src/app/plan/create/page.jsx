import { NewPlan } from "@/components/plan/NewPlan";
import { prisma } from "@/lib/db";

export default async function Plan() {

  return (
    <main className=" flex min-h-screen justify-center items-center bg-slate-50 ">
      <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
        <NewPlan />
      </div>
    </main>
  );
}