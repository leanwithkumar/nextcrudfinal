'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Editform({ id }: { id: string }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/test/route?id=${id}`);
        setTitle(res.data.title || "");
        setDescription(res.data.description || "");
      } catch (error) {
        console.error("Failed to fetch todo", error);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/test/route?id=${id}`, { title, description });
      router.push("/");
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  return (
    <div className="text-center text-3xl py-4">
      Edit Todo
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
            className="bg-[#121212] text-white px-10 py-2 rounded-md"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
