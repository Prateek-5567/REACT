import { useEffect, useState } from 'react'
import './App.css'
import { TodoContext, TodoProvider, useTodo } from './contexts/index'
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';
import React from 'react';

function App() {
  const [todos, setTodos] = useState( [] ); // for todo list. :- it is array of objects. 

  const addTodo = (msg)=>{
    setTodos( (prev)=>[ {id:Date.now() ,completed : false , todo : msg},...prev])
  }

  // prev holds the prev state of todos ; 
  //  todos is a array of objects => [ {},{},{}.. ]
  const updateTodo = (id,newMsg)=> {
    setTodos( (prev) => prev.map((eachObject) =>
      eachObject.id === id
        ? { ...eachObject, todo: newMsg }  // create a new updated object and return it .
        : eachObject                       // keep as is .
    )
    )
  };

 /** .map() loop on arrays in js/:
 * 
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num * 2);
 */
  
  const deleteTodo = (id)=>{
    setTodos( (prev)=>prev.filter( (todo)=>(todo.id!==id)) );
  }

  const toggleComplete = (id)=>{
    setTodos( (prev) => prev.map((eachObject) =>
      eachObject.id === id
        ? { ...eachObject, completed: (!eachObject.completed) }  // create a new updated object and return it .
        : eachObject                       // keep as is .
    )
    )
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0) setTodos(todos);
  },[])
  useEffect( ()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value = {{todos  , addTodo , updateTodo , deleteTodo , toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />
            </div>

            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {
                  todos.map( (eachObject) => {
                    return(
                      <div key={eachObject.id} className='w-full'>
                        <TodoItem todo={eachObject}/>
                      </div>
                    )
                  } )
                }
            </div>

        </div>
    </div>
    </TodoProvider>
  )
}

export default App
