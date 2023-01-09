import { useState, useContext } from 'react'
import { TodoList, TodoDetail } from '../components';
import { Todo } from '../types';
import { TodoActionsContext, TodoValueContext } from '../context/TodoContext';
import './todos.css';

const Todos = () => {
  const todos = useContext(TodoValueContext);
  const actions = useContext(TodoActionsContext);
  const [isEdit, setIsEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo>();
  const [newTodo, setNewTodo] = useState({title:'', content:''});

  const handleChange = (e) => {
    setNewTodo({...newTodo, [e.currentTarget.name]: e.currentTarget.value});
  };

  const handleCreateOrEdit = (e) => {
    e.preventDefault();
    if (isEdit && currentTodo) {
      actions.update(currentTodo?.id, newTodo?.title, newTodo?.content);
      setNewTodo({title:'', content:''});
      setCurrentTodo({...currentTodo});
    } else {
      actions.create(newTodo.title, newTodo.content);
    }
  };

  return (
    <>
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <section className="todo-input">
          <div className="todo-input-title">
            <input 
              name="title" 
              value={newTodo.title} 
              onChange={handleChange} 
              placeholder="새로운 Todo의 제목을 입력하세요"
            />
            <button 
              className="hover-button" 
              onClick={handleCreateOrEdit}
            >
                { isEdit && currentTodo ? '완료' : '추가' }
            </button>
          </div>
          <textarea 
            name="content" 
            value={newTodo.content} 
            onChange={handleChange} 
            placeholder="새로운 Todo의 내용을 입력하세요"
          />
        </section>
        <div className="todo-container">
          <section className="todo-list border">
            {todos.map(todo => (
              <TodoList 
                key={todo.id} 
                todo={todo} 
                onClick={() => setCurrentTodo(todo)}
              />
            ))}
          </section>
          <section className="todo-detail border">
            { currentTodo ? (
              <TodoDetail 
                key={currentTodo.id} 
                todo={currentTodo} 
                setInputTodo={setNewTodo}
                setIsEdit={setIsEdit}
                setCurrentTodo={setCurrentTodo} 
                deleteTodo={actions.delete} 
              />
            ):(
              <p>선택한 Todo가 없습니다</p>
            )}
          </section>
        </div>
      </main>
    </>
  )
}

export default Todos;