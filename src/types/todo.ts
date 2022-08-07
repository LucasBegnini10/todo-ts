export interface TodoType {
    id: string,
    title: string,
    description: string,
    status: boolean
}

export interface TodoContextType {
    todos: TodoType[],
    addTodo: (todo: TodoType) => void,
    updateTodo: (todo: TodoType) => void,
    removeTodo: (id: string) => void
}