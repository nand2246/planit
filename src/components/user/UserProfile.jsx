'use client'

import { useState } from "react";
import TextInput from "../TextInput";
import { useRouter } from "next/navigation";
import ListInput from "../ListInput";
import OpaqueButton from "../buttons/OpaqueButton";
import TitleText from "../TitleText";

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
    <div>
      <TitleText text={"User details"}/>
    <div className="w-96 h-100 bg-neutral-50 rounded-lg shadow p-7">
      <form onSubmit={update} className="flex gap-3 flex-col items-center">

        <TextInput placeholder={"First Name"} value={_firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!editing} />
        <TextInput placeholder={"Last Name"} value={_lastName} onChange={(e) => setLastName(e.target.value)} disabled={!editing} />
        <TextInput placeholder={"Location"} value={_location} onChange={(e) => setLocation(e.target.value)} disabled={!editing} />
        <ListInput label={"Interests"} value={_interests} onChange={setInterests} disabled={!editing} />
        <TextInput placeholder={"Phone Number"} value={_phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} disabled={!editing} />

        <div className="w-fit justify-center">
          <OpaqueButton 
            text={editing ? 'Cancel' : 'Edit'}
            callback={(e) => {
              e.preventDefault();
              console.log("HERE")
              toggleEditing(!editing)
              reset();
            }}/>
          <OpaqueButton 
            text='Save'
            type='submit'
          />
        </div>
      </form>
    </div>
    </div>

  )

}
