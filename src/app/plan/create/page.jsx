import { NewPlan } from "@/components/plan/NewPlan";
import Navigation from "@/components/Navigation";

export default async function Plan() {

  return (
    <main className=" bg-orange-50 flex  justify-center items-center h-screen">
      <div>
        <NewPlan />
      </div>
    <div><Navigation/></div>
    </main>
  );
}