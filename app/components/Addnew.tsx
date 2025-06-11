"use client"

import axios from "axios";
import { useState } from "react";

function Addnew() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlethis = async()=>{
    try{
      const res = await axios.post("/api/test",{
      title,
      description
    });
      if(res.status === 201){
        setTitle("");
        setDescription("");
        console.log("Todo added : ", res.data);
    }
    }
    catch(error){
      console.log("Unable to add thsi todo", error)
    }

  
  }
  return (
    <>
      <div className="text-center text-3xl py-4">
        Add Todo here
      </div>

      <div className="w-full max-w-[850px] mx-auto border-2 border-black p-4 rounded-md">
        <div className="p-2">
          <input
            type="text"
            placeholder="Write the title here"
            className="w-full h-20 px-4 border border-black rounded-md"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="p-2">
          <textarea
            placeholder="Write the description here"
            className="w-full h-32 px-4 py-3 border border-black resize-none rounded-md"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-center py-5">
          <button
          onClick={handlethis}
          className="bg-[#121212] text-white px-10 py-2 rounded-md">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Addnew;
