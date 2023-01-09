import { createContext, useEffect, useState, useMemo } from 'react';
import { Todo } from '../types';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api';

export const TodoValueContext = createContext([]);
// export const TodoActionsContext = createContext<{create:() => void; update:() => void; delete:() => void;}>();
export const TodoActionsContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(Array<Todo>);
    const actions = useMemo(
        () => ({
            create(title:string, content:string) {
                (async function () {
                    const newTodo = await createTodo(title, content);
                    setTodos((prev) => [...prev, newTodo]);
                })();
            },
            update(id:string, title:string, content:string) {
                (async function () {
                    const updatedTodo = await updateTodo(id, title, content);
                    setTodos((prev) => prev.map(todo => todo.id === id ? updatedTodo : todo));
                })();
            },
            delete(id:string) {
                (async function () {
                    await deleteTodo(id);
                    setTodos((prev) => prev.filter(todo => todo.id !== id));
                })();
            }
        }),
        []
    );

    useEffect(() => {
        async function getTodo() {
            const data:Todo[] = await getTodos();
            setTodos(data);
        }
        getTodo();
    }, [])

    return (
        <TodoValueContext.Provider value={todos}>
            <TodoActionsContext.Provider value={actions}>
                {children}
            </TodoActionsContext.Provider>
        </TodoValueContext.Provider>
    )
}