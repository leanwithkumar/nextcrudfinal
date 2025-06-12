import connectingDB from "@/lib/mongodb";
import Todo from "@/models/todo";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req : NextApiRequest, res : NextApiResponse){

await connectingDB();

if(req.method === "POST"){
    try{
        const{title, description} = req.body;
        const newTodo = await Todo.create({title, description});
        return res.status(201).json(newTodo)
    }
    catch(error){
        return res.status(400).json(error)
    }
}

if (req.method === "GET") {
  try {
    const { id } = req.query;

    if (id) {
      const singleTodo = await Todo.findById(id);
      if (!singleTodo) return res.status(404).json({ message: "Todo not found" });
      return res.status(200).json(singleTodo);
    }

    const allTodos = await Todo.find();
    return res.status(200).json(allTodos);

  } catch (error) {
    return res.status(400).json({ error });
  }
}


if(req.method === "DELETE"){
    try{
        const {id} = req.query;
        await Todo.findByIdAndDelete(id);
        return res.status(201).json({mesage : "todo deleted sucessfully"})


    }
    catch(error){
        res.status(400).json(error)
    }
}

if (req.method === "PUT") {
  try {
    const { id } = req.query;
    const { title, description } = req.body;

    if (!id) return res.status(400).json({ message: "Missing ID in query" });

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTodo) return res.status(404).json({ message: "Todo not found" });

    return res.status(200).json({ message: "Todo updated successfully", updatedTodo });
  } catch (error) {
    return res.status(400).json({ error });
  }
}



}