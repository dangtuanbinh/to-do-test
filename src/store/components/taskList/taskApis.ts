import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApis = createApi({
  reducerPath: "taskApis",

  baseQuery: fetchBaseQuery({
    baseUrl: `https://${process.env.REACT_APP_API_KEY}.${process.env.REACT_APP_API_URL}`,
  }),

  endpoints: (builder) => ({
    getTaskList: builder.query<any, void>({
      query: () => ({
        url: '/tasks',
        method: "GET",
      }),
    }),

    addTask: builder.mutation<any, { title: string , status: string}>({
      query: (newTask) => ({
        url: '/tasks',
        method: 'POST',
        body: newTask,
      }),
    }),

    updateTaskStatus: builder.mutation<any, { id: number, status: string }>({
      query: ({ id, status }) => ({
        url: `/tasks/${id}`,
        method: 'PUT', 
        body: { status },
      }),
    }),
  }),
});

export const {
  useGetTaskListQuery,
  useAddTaskMutation,
  useUpdateTaskStatusMutation,
} = taskApis;
