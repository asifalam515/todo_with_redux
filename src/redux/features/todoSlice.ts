import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type Ttodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
type TInitialState = {
  todos: Ttodo[];
};
const initialState: TInitialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Ttodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
