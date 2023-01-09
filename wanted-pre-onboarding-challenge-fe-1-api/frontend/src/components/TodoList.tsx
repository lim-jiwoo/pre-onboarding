import { Todo } from '../types';

const TodoList = ({todo, onClick}:{todo:Todo; onClick:() => void;}) => {
  return (
    <>
        <div className='todo-list__item' onClick={onClick}>
            {todo.title}
        </div>
    </>
  )
}

export default TodoList;