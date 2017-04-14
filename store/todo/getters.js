export const completedTodos = state => state.todos.filter(todo => todo.completed)

export const incompletedTodos = state => state.todos.filter(todo => !todo.completed)
