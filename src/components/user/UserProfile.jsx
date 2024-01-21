'use client'

import { useState } from "react";
import TextInput from "../TextInput";
import { useRouter } from "next/navigation";
import ListInput from "../ListInput";

export default function UserProfile({ id, firstName, lastName, location, interests, phoneNumber }) {

  const [_firstName, setFirstName] = useState(firstName || "");
  const [_lastName, setLastName] = useState(lastName || "");
  const [_location, setLocation] = useState(location || "");
  const [_interests, setInterests] = useState(interests || []);
  const [_phoneNumber, setPhoneNumber] = useState(phoneNumber || "");

  const [editing, toggleEditing] = useState(false);

  const router = useRouter()

  const reset = () => {
    setFirstName(firstName);
    setLastName(lastName);
    setLocation(location);
    setInterests(interests);
    setPhoneNumber(phoneNumber);
  }

  const update = async (e) => {
    e.preventDefault()
    toggleEditing(false);

    firstName = _firstName;
    lastName = _lastName;
    location = _location;
    interests = _interests;
    phoneNumber = _phoneNumber;

    await fetch(`/api/user/update`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
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
      <form onSubmit={update} className="flex gap-3 flex-col items-center">

        <TextInput placeholder={"First Name"} value={_firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!editing} />
        <TextInput placeholder={"Last Name"} value={_lastName} onChange={(e) => setLastName(e.target.value)} disabled={!editing} />
        <TextInput placeholder={"Location"} value={_location} onChange={(e) => setLocation(e.target.value)} disabled={!editing} />
        <ListInput label={"Interests"} value={_interests} onChange={setInterests} disabled={!editing} />
        <TextInput placeholder={"Phone Number"} value={_phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} disabled={!editing} />

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleEditing(!editing)
            reset();
          }}
          className="bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500">
          <p className=" text-center">{editing ? "Cancel" : "Edit"}</p>
        </button>

        <button
          type="submit"
          disabled={!editing}
          className="  bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
        >
          <p className=" text-center">Save</p>
        </button>
      </form>
    </div >
  )

}
