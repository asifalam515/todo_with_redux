import { useAppSelector } from "@/redux/features/hook";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>

        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl space-y-5 p-[3px]">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white  p-5 w-full h-full rounded-md">
          {todos.map((item) => (
            <TodoCard
              title={item.title}
              description={item.description}
            ></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
