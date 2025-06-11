'use client'
import axios from "axios";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function Editthis({id}:{id:string}){
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        if (!id) return;
         
        const alldata = async ()=>{
            try{
               const res =  await axios.get(`/api/test?id=${id}`)
               setTitle(res.data.title || "");
               setDescription(res.data.description || "");
               console.log("data fetched sucessfully");

               

            }catch(error){
                console.log("unable to get data from the selected todo", error)
            }
        }
        alldata();


    },[id])

    const handleUpdate = async () => {
    try {
      await axios.put(`/api/test?id=${id}`, { title, description });
      router.push("/"); 
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };



     return(
        <>
        <div className="text-center text-3xl py-4">
        Edit Todo
      </div>

      <div className="w-full max-w-[850px] mx-auto border-2 border-black p-4 rounded-md">
        <div className="p-2">
          <input
            type="text"
            placeholder="Write the title here"
            className="w-full h-20 px-4 border border-black rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
       
          />
        </div>
        <div className="p-2">
          <textarea
            placeholder="Write the description here"
            className="w-full h-32 px-4 py-3 border border-black resize-none rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-center py-5">
          <button
          onClick={handleUpdate}
          className="bg-[#121212] text-white px-10 py-2 rounded-md">
            Update
          </button>
        </div>
      </div>
        
        </>
     )
}