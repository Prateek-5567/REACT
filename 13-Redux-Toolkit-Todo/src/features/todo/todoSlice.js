import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [ {
        id : 1,
        text : "Hello World",
        completed : false
    } ]
} // this is state.

const todoSlice = createSlice(
    {
        name : 'todo',
        initialState,
        reducers :{
            addTodo : (state,action) => {
                const todoObj = {
                    id : nanoid(),
                    text : action.payload.text,
                    completed : action.payload.completed
                }
                state.todos.push(todoObj);
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            }, // not returning 
            updateTodo : (state,action) => { // non returning
                const {id,text,completed} = action.payload;
                const existingTodo = state.todos.find( (eachObj)=> (eachObj.id === id) );
                if(existingTodo){
                    existingTodo.text = text;
                    existingTodo.completed = completed;
                }
            },
            toggleCompleted : (state,action) => { // non returning
                const existingTodo = state.todos.find((eachObj) => (eachObj.id === action.payload.id) );
                if(existingTodo){
                    existingTodo.completed = !existingTodo.completed;
                }
            }
                
            
        }
    }
)

// we need to export our reducers so that they can be imported in the components
export const {toggleCompleted,addTodo,removeTodo,updateTodo} = todoSlice.actions;

// we need to give awareness of reducers to the store.
export default todoSlice.reducer;  // it is auto exported with some other name i.e todoReducer
