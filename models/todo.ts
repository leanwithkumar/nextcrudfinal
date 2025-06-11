import { Document, model, models, Schema } from "mongoose";

export interface TodoStruct extends Document{
    title : string;
    description : string;
    createdat : Date;
}

const TodoSchema : Schema = new Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    createdat : {
        type : Date,
        default : Date.now
    }

}
);


const Todo = models.Todo || model<TodoStruct>("Todo", TodoSchema);

export default Todo;
