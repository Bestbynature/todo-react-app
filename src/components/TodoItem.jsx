import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri"
import { useAuthContext } from '@/context/AuthContext';

const TodoItem = ({ itemProp, setTodos }) => {

    const {user} = useAuthContext()
    const [editing, setEditing] = useState(false)

    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }


    const handleChange = (id) => {
        setTodos((prev)=>
        prev.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
    )
    }

    const handleEdit = () => {
        setEditing(true)
    }

    const handleEditChange = (e) => {
        setTodos((prev)=>
            prev.map((todo)=>{
                if(todo.id === itemProp.id){
                    return {...todo, title: e.target.value}
                }
                return todo
            })
        );
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setEditing(false)
        }
    }

    
    const delTodo = (id) => {
        setTodos((prev)=>
        prev.filter((todo)=> todo.id !== id)
        )
    }

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

    return ( 
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
            <input 
            type="checkbox"
            checked={itemProp.completed}
            onChange={()=>handleChange(itemProp.id)}
            />
            {user && (
                <button onClick={handleEdit}>
                <RiEdit2Fill
                style={
                    { color: "#5e5e5e", 
                    fontSize: "16px" }
                    }/>
                </button>
            )}
            <button onClick={()=>delTodo(itemProp.id)}>
            <RiDeleteBin6Fill
            style={
                { color: "#5e5e5e", 
                fontSize: "16px" }
                }/>
                </button>
            
            <span style={itemProp.completed? completedStyle : null }>
            { itemProp.title }
            </span>
            </div>
            <input
                type="text"
                value={itemProp.title}
                className={styles.textInput}
                style={editMode}
                onChange={handleEditChange}
                onKeyDown={handleEnter}
            />
        </li>
     );
}
 
export default TodoItem;