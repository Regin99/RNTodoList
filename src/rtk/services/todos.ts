import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {UpdatedTodo, NewTodo, Todo} from '../../types/types';

const BASE_URL = 'http://localhost:3000/';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
    }),
    updateTodo: builder.mutation<Todo, UpdatedTodo>({
      query: todo => ({
        url: `todos/${todo._id}`,
        method: 'PATCH',
        body: todo,
      }),
    }),
    addTodo: builder.mutation<Todo, NewTodo>({
      query: todo => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
    }),
    deleteTodo: builder.mutation<void, string>({
      query: id => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
