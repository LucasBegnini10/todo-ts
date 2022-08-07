import * as React from "react";
import { TodoContextType, TodoType } from "../types/todo";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({children}) => {
    const [todos, setTodos] = React.useState<TodoType[]>([])

    const addTodo = (todo: TodoType) => {
        const newTodo: TodoType = {
            id: uuidv4(),
            title: todo.title,
            description: todo.description,
            status: todo.status
        }
        setTodos((prevValue) => [...prevValue, newTodo])
    }

    const updateTodo = (todo: TodoType) => {
        const index = todos.findIndex((_todo: TodoType) => _todo.id === todo.id )
        const item = todos[index];
        item.id = todo.id;
        item.status = todo.status;
        item.description = todo.description;
        item.title = todo.title;
        setTodos([...todos])
    }

    const removeTodo = (id: string) => {
        const newTodos = todos.filter((_todo: TodoType) => {
            return _todo.id !== id
        })
        setTodos(newTodos)
    }

    return(
        <TodoContext.Provider value={{todos, addTodo, updateTodo, removeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
