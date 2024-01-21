"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import TextInput from "../TextInput";
import NumberInput from "../NumberInput"
import DateTimeInput from "../DateTimeInput"

export const NewPlan = () => {
  const { user, error, isLoading } = useUser();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [minAttendees, setMinAttendees] = useState("");
  const [maxAttendees, setMaxAttendees] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  const router = useRouter()
  const create = async (e) => {
    e.preventDefault()
    await fetch(`/api/plan`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        location,
        minAttendees: parseInt(minAttendees),
        maxAttendees: parseInt(maxAttendees),
        dateTime: new Date(dateTime).toISOString(),
        image,
        tags,
        state: "proposed",
        userId: user.sub,
        }),
    })

    router.refresh();
  };
  return (
    <div className="mx-8 mt-4 mb-6">
      <form onSubmit={create} className="flex gap-3 flex-col items-center">
        <TextInput
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextInput
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <NumberInput
          placeholder="Minimum Attendees"
          value={minAttendees}
          onChange={(e) => setMinAttendees(e.target.value)}
        />
        <NumberInput
          placeholder="Maximum Attendees"
          value={maxAttendees}
          onChange={(e) => setMaxAttendees(e.target.value)}
        />
        <DateTimeInput
          placeholder="Date"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        /> 
        <TextInput
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)} 
        />
        <TextInput
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)} 
        />
        <button
          type="submit"
          className="bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
        >
          <p className=" text-center">+</p>
        </button>
      </form>
    </div>
  )
}
