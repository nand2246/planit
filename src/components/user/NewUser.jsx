"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import TextInput from "../TextInput";

export const NewUser = () => {
  const { user } = useUser();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter()
  const create = async (e) => {
    e.preventDefault()
    await fetch(`/api/user/create`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: user.sub,
        email: user.email,
        rating: 100,
        firstName,
        lastName,
        location,
        interests,
        phoneNumber,
      }),
    })

    router.refresh();
  };
  return (
    <div className="mx-8 mt-4 mb-6">
      <form onSubmit={create} className="flex gap-3 flex-col items-center">

        <TextInput placeholder={"First Name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <TextInput placeholder={"Last Name"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <TextInput placeholder={"Location"} value={location} onChange={(e) => setLocation(e.target.value)} />
        <TextInput placeholder={"Interests"} value={interests} onChange={(e) => setInterests(e.target.value)} />
        <TextInput placeholder={"Phone Number"} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

        <button
          type="submit"
          className="  bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
        >
          <p className=" text-center">Submit</p>
        </button>
      </form>
    </div>
  )
}
