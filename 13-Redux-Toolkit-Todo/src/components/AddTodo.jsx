import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            // Dispatch the slice-generated action creator with the payload object.
            // Do NOT pass a full action (with `type`); the action creator will create the
            // correct action object and put this object on `action.payload`.
           
            dispatch(addTodo({
                text: input,
                completed: false,
            }));

// yaha dikkat ai thi : You passed a full action object into the slice action creator.
//  The generated action creator wraps whatever you pass as the payload,
//  so your reducer read the wrong path (the text ended up nested and was therefore undefined).
// so whatever you pass in function is treated as payload. 

            // clear input only after successful dispatch
            setInput('');
        }
    }

  return (
    <div>
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange = { (e)=>setInput(e.target.value)}
        />
        <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
            Add Todo
        </button>
        </form>
    </div>
  )
}

export default AddTodo
