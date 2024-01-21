"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';

export const NewUser = () => {
  const { user, error, isLoading } = useUser();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter()
  const create = async (e) => {
    e.preventDefault()
    await fetch(`/api/user`, {
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
        phoneNumber
      }),
    })

    router.refresh();
  };
  return (
    <div className="mx-8 mt-4 mb-6">
      <form onSubmit={create} className="flex gap-3 flex-col items-center">
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300"
          required
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300"
          required
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300"
          required
        />
        <input
          type="text"
          name="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Interests"
          className=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className=" border border-slate-400 rounded-full flex-1  py-1 px-2 outline-none focus-within:border-slate-100 bg-slate-50 focus-within:bg-slate-100 placeholder:text-slate-300"
          required
        />
        <button
          type="submit"
          className="  bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
        >
          <p className=" text-center">+</p>
        </button>
      </form>
    </div>
  )
}
