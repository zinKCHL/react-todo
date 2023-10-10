import CrossIcon from "./icons/CrossIcon";

const TodoList = () => {
    return (
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
            <article className="flex gap-4 border-b-gray-400 border-b">
                <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
                <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
                <button className="flex-none">
                    <CrossIcon />
                </button>
            </article>
        </div>
    );
};

export default TodoList;
