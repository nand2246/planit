import UserProfile from '@/components/user/UserProfile'
import { prisma } from '@/lib/db'
import { getSession } from '@auth0/nextjs-auth0';

export default async function User() {
  const session = await getSession();
  const { user } = session;
  const { firstName, lastName, location, phoneNumber, interests } = await prisma.user.findUnique({
    where: {
      id: user.sub,
    },
  });

  return (
    <main className=" flex min-h-screen justify-center items-center bg-slate-50 ">
      <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
        <UserProfile id={user.sub} firstName={firstName} lastName={lastName} location={location} phoneNumber={phoneNumber} interests={interests} />
      </div>
    </main>
  )
}
