import { NewPlan } from "@/components/plan/NewPlan";
import { prisma } from "@/lib/db";

export default async function Plan() {

  return (
    <main className=" bg-orange-50 flex  justify-center items-center h-screen">
      <div>
        <NewPlan />
      </div>
    </main>
  );
}