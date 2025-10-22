import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [msg,setMsg] = useState("");

    const {addTodo} = useTodo();

    const addMsg = (e)=>{
        e.preventDefault();
        if(!msg)return
        
        addTodo(msg);
        setMsg("");
    }


    return (
        <form  className="flex">
            <input
                type="text"
                value={msg} // this is called wiring krna : connect dots.
                onChange={(e)=> setMsg(e.target.value)} // save the msg in your current msgState.
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={addMsg} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

