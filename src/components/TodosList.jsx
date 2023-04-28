import TodoItem from '@/components/TodoItem'
import { PropTypes } from 'prop-types';

const TodosList = ({ todosProps, setTodos }) => {
    return ( 
        <ul>
            {todosProps.map((todo)=>(
                <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
            ))}
        </ul>
     );
}
 
TodosList.propTypes = {
    todosProps: PropTypes.array.isRequired,
    setTodos: PropTypes.func.isRequired
}

export default TodosList;