import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <div className="mt-8 bg-white rounded-t-md overflow-hidden dark:bg-gray-800 [&>article]:p-4 transition-all duration-1000">

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
