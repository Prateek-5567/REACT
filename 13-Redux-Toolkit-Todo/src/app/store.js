import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import React from 'react';

export const store = configureStore({
    reducer: todoReducer
});