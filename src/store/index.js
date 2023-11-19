// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoReducer';
import themeReducer from '../reducers/themeReducer';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer
  },
});

export {store};