import { Todo } from '../types';

type TodoDetailProps = {
  todo: Todo;
  setInputTodo: React.Dispatch<React.SetStateAction<{title: string; content: string;}>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>;
  deleteTodo: (id:string) => void;
}

const TodoDetail = ({todo, setInputTodo, setIsEdit, setCurrentTodo, deleteTodo}:TodoDetailProps) => {

  const handleDelete = () => {
    deleteTodo(todo.id);
    setCurrentTodo(undefined);
  }

  const handleStartEdit = () => {
    setIsEdit(true);
    setInputTodo({title: todo.title, content: todo.content});
  }

  return (
    <>
      <article className="todo-detail__container">
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
        </div>
        <div>
          <button className="margin-right hover-button" onClick={handleStartEdit}>수정하기</button>
          <button className="hover-button" onClick={handleDelete}>삭제하기</button>
        </div>
      </article>
    </>
  )
}

export default TodoDetail;