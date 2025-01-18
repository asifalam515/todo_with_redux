import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { data, isLoading, isError } = useGetTodosQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>Failed to load tasks. Please try again later.</p>
      </div>
    );
  }

  // Access the data array from the response
  const todos = data?.data ?? [];

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl space-y-5 p-[3px]">
        <div className="bg-white p-5 w-full h-full rounded-md">
          {todos.length > 0 ? (
            todos.map((item) => <TodoCard key={item._id} {...item} />)
          ) : (
            <div className="flex justify-center items-center">
              <p>No tasks available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
