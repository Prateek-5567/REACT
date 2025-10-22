import { createContext , useContext} from "react"

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            completed:false,
            todo:"todo msg"
        }
    ],
    // and as you know functions chahiye to sirf unke naam lihkho unhe define vaha karna jaha Provider use karo mostly App.jsx

    addTodo : (msg)=>{},
    updateTodo : (id,newMsg)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}

}); 
// you know you can initialise values in create context.

export const useTodo = ()=>{return useContext(TodoContext);} // coustom hook/

export const TodoProvider = TodoContext.Provider;



