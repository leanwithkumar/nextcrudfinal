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

if(req.method === "GET"){
    try{
        const alltodo = await Todo.find();
        return res.status(200).json(alltodo);
    }
    catch(error){
        res.status(400).json(error)
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

if(req.method === "PUT"){
    try{
        const {id} = req.query;
        const {title, description} = req.body;
        await Todo.findByIdAndUpdate(id, {title, description}, {new : true});
        res.status(200).json({message : "Todo updated Sucessfully"})
    }catch(error){
        return res.status(400).json(error)
    }
}


}