import { useState, useEffect } from "react";
import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";


const TodosLogic = () => {
    
  const getStore = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || []
    return todos
  }

  const [todos, setTodos] = useState(getStore())

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])



    return ( 
        <div>
        <InputTodo setTodos={setTodos} />
        <TodosList setTodos={setTodos} todosProps={todos}/>
       </div>
     );
}
 
export default TodosLogic;