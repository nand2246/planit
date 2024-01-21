'use client'

import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

export const ViewPlan = ({ plan }) => {
  const { user, error, isLoading } = useUser();
  const _plan = JSON.parse(plan)
  const router = useRouter()

  const joinEvent = async (e) => {
    console.log("ONE")
    e.preventDefault();
    await fetch(`/api/plan/addAttendee`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planId: _plan.id,
        userId: user.sub,
      }),
    })
    console.log("TWO")

    router.refresh()
  }

  const unjoinEvent = async (e) => {
    console.log(plan, plan["id"])
    e.preventDefault();
    await fetch(`/api/plan/removeAttendee`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planId: _plan.id,
        userId: user.sub,
      }),
    })
    console.log("TEST")

    router.refresh()
  }

  return (
    <div>
      {plan}
      <form onSubmit={joinEvent} className="flex gap-3 flex-col items-center">
        <button
            type="submit"
            className="  bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
          >
            <p className=" text-center">Join</p>
        </button>
      </form>

      <form onSubmit={unjoinEvent} className="flex gap-3 flex-col items-center">
        <button
          type="submit"
          className="  bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
        >
          <p className=" text-center">Unjoin</p>
        </button>
      </form>
    </div>
  )
}
