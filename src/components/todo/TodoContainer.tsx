import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>

        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl space-y-5 p-[3px]">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white  p-5 w-full h-full rounded-md">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
