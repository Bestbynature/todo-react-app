import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = ({ setTodos }) => {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title.trim()){
            setMessage('')
            setTodos((prev)=>{
                const newList =  [...prev, {
                      "id": uuidv4(),
                      "title": title,
                      "completed": false
                  }]
                  return newList
              })
              setTitle('')
        }else{
            setMessage('kindly add an item')
        }
    }

    return ( 
        <>
        <form onSubmit={handleSubmit} className="form-container">
        <input type="text" 
        placeholder="Add todo..." 
        value={title}
        onChange={handleChange}
        className="input-text"
        />
        <button type="submit" className="input-submit">
            <FaPlusCircle /></button>
        </form>
        <span className="submit-warning">{message}</span>
        </>
     );
}
 
export default InputTodo;