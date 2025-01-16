import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormEvent, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAppDispatch } from "@/redux/features/hook";
import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetails = {
      id: randomString,
      title: task,
      description,
    };
    dispatch(addTodo(taskDetails));
    console.log(taskDetails);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add To do</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onChange={(e) => setTask(e.target.value)}
                  id="task"
                  value={task}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  value={description}
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
