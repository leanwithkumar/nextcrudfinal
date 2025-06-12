'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


interface TodoItem {
  _id: string;
  title: string;
  description: string;
}

function Todo() {
    const [todo, setTodo] = useState<TodoItem[]>([]);

    useEffect(()=>{
        const fetchTodo = async ()=>{
            try{
              const res = await axios.get("/api/test/route");
              setTodo(res.data)

            }catch(error){
                console.error("Failed to load all todo", error)
            }
        }
        fetchTodo();

    },[])

    const deletethis = async (id: string)=>{
        try{
            await axios.delete("/api/test/route", {params : {id}})
            setTodo((prev) => prev.filter((item) => item._id !== id));
        }catch(error){
            console.log("unable to delete this todo", error)
        }
    }
    if(!todo.length){
      return(
    <div>no todo</div>
    )

    }
    else{
      return (
    <>
    {todo.map((todoitem)=>(
         <div
          key={todoitem._id}
        >
        <div className="border border-black rounded-md max-w-[850px] w-full mx-auto my-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="p-4 text-2xl md:text-3xl font-semibold">
            {todoitem.title}
          </div>

          <div className="flex justify-start md:justify-end px-4 gap-4">
            <div>
              <button onClick={()=>deletethis(todoitem._id)}
            
            className="py-2"
            
            >Delete</button>

            </div>
            
            <div className="py-2">
              <Link href={`/Edit/${todoitem._id}`} className="text-blue-600 hover:underline">Edit</Link>
            </div>
          </div>
        </div>

        <div className="p-4 text-base md:text-lg text-gray-700">
          {todoitem.description}
        </div>
        </div>
        </div>
    ))
    }
      
     
   
   
    </>
  )

    }
      
      
    

  
}

export default Todo;
