import { ViewPlan } from '@/components/plan/ViewPlan'
import { prisma } from '@/lib/db'

export default async function Plan({ params }) {
  const plan = await prisma.plan.findUnique({
    where: {
        id: params.id,
    },
  })

  return (
    <main className=" flex min-h-screen justify-center items-center bg-slate-50 ">
      <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
        <h1 className="text-3xl text-center">all users</h1>
        <ul className="px-6">
          <ViewPlan plan={JSON.stringify(plan)} />
        </ul>
      </div>
    </main>
  )
}
