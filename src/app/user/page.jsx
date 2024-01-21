import Navigation from '@/components/Navigation';
import UserProfile from '@/components/user/UserProfile'
import { prisma } from '@/lib/db'
import { getSession } from '@auth0/nextjs-auth0';

export default async function User() {
  const session = await getSession();
  const { user } = session;
  const data = await prisma.user.findUnique({
    where: {
      id: user.sub,
    },
  });
  const { firstName, lastName, location, phoneNumber, interests } = data;

  return (
    <main className="bg-orange-50 flex  justify-center items-center h-screen">
      <h1 className="text-3xl text-center"></h1>
      <ul className="px-6">
        <UserProfile id={user.sub} firstName={firstName} lastName={lastName} location={location} phoneNumber={phoneNumber} interests={interests}  />
      </ul>
      <div><Navigation/></div>
  </main>
  )
}
