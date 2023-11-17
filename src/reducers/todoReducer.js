import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { list: [] },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload , completed: false});
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const id = action.payload;
      const todo = state.list.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
