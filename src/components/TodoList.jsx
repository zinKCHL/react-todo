import { Droppable, Draggable } from '@hello-pangea/dnd';

import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <Droppable droppableId="todos">
            {
                (droppableProvider) => (
                    <div
                        ref={droppableProvider.innerRef}
                        {...droppableProvider.droppableProps}
                        className="mt-8 bg-white rounded-t-md overflow-hidden 
                    dark:bg-gray-800 [&>article]:p-4 transition-all duration-1000"
                    >
                        {todos.map((todo, index) => (
                            <Draggable
                                key={todo.id}
                                index={index}
                                draggableId={`${todo.id}`}
                            >
                                {
                                    (draggableProvided) => (
                                        <TodoItem
                                            todo={todo}
                                            updateTodo={updateTodo}
                                            removeTodo={removeTodo}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            {...draggableProvided.draggableProps}
                                        />
                                    )
                                }
                            </Draggable>
                        ))}
                        {droppableProvider.placeholder}
                    </div>
                )
            }
        </Droppable>
    );
};

export default TodoList;
