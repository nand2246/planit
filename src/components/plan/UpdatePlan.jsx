"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import TextInput from "../TextInput";
import NumberInput from "../NumberInput"
import DateTimeInput from "../DateTimeInput"

export const UpdatePlan = ({id, title, description, location, minAttendees, maxAttendees, dateTime, image, tags}) => {
  const { user, error, isLoading } = useUser();

  const [_title, setTitle] = useState(title || "");
  const [_description, setDescription] = useState(description || "");
  const [_location, setLocation] = useState(location || "");
  const [_minAttendees, setMinAttendees] = useState(minAttendees || "");
  const [_maxAttendees, setMaxAttendees] = useState(maxAttendees || "");
  const [_dateTime, setDateTime] = useState(new Date(new Date(dateTime).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0] || "");
  const [_image, setImage] = useState(image || "");
  const [_tags, setTags] = useState(tags || "");

  const [_editing, toggleEditing] = useState(false);

  const reset = () => {
    setTitle(title)
    setDescription(description)
    setLocation(location)
    setMinAttendees(minAttendees)
    setMaxAttendees(maxAttendees)
    setDateTime(dateTime)
    setImage(image)
    setTags(tags)
  }

  const router = useRouter()
  
  const update = async (e) => {
    e.preventDefault()
    toggleEditing(false)
    
    title = _title
    description = _description
    location = _location
    minAttendees = _minAttendees
    maxAttendees = _maxAttendees
    dateTime = _dateTime
    image = _image
    tags = _tags

    await fetch(`/api/plan/update/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        description,
        location,
        minAttendees: parseInt(minAttendees),
        maxAttendees: parseInt(maxAttendees),
        dateTime: new Date(dateTime).toISOString(),
        image,
        tags,
        }),
    })

    router.refresh();
  };
  return (
    <div className="mx-8 mt-4 mb-6">
      <form onSubmit={update} className="flex gap-3 flex-col items-center">
        <TextInput
          placeholder="Title"
          value={_title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={!_editing}
        />
        <TextInput
          placeholder="Description"
          value={_description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={!_editing}
        />
        <TextInput
          placeholder="Location"
          value={_location}
          onChange={(e) => setLocation(e.target.value)}
          disabled={!_editing}
        />
        <NumberInput
          placeholder="Minimum Attendees"
          value={_minAttendees}
          onChange={(e) => setMinAttendees(e.target.value)}
          disabled={!_editing}
        />
        <NumberInput
          placeholder="Maximum Attendees"
          value={_maxAttendees}
          onChange={(e) => setMaxAttendees(e.target.value)}
          disabled={!_editing}

        />
        <DateTimeInput
          placeholder="Date"
          value={_dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          disabled={!_editing}
        /> 
        <TextInput
          placeholder="Image"
          value={_image}
          onChange={(e) => setImage(e.target.value)} 
          disabled={!_editing}
        />
        <TextInput
            placeholder="Tags"
            value={_tags}
            onChange={(e) => setTags([e.target.value])} 
            disabled={!_editing}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleEditing(!_editing)
            reset();
          }}
          className="bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500">
          <p className=" text-center">{_editing ? "Cancel" : "Edit"}</p>
        </button>

        <button
          type="submit"
          disabled={!_editing}
          className="  bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
        >
          <p className=" text-center">Save</p>
        </button>
      </form>
    </div>
  )
}
