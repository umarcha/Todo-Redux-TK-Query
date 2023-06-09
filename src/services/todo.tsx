import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { StatusIF, TodoIF } from "../types"

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://todo-backend.cyclic.app/" }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodo: builder.query<TodoIF, void>({
      query: () => `get-todo`
    }),
    addTodo: builder.mutation({
      query: (data: string) => ({
        url: `add-todo`,
        method: "POST",
        body: { title: data, status: false }
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id: string) => ({
        url: `delete/${id}`,
        method: "DELETE"
      })
    }),
    updateStatus: builder.mutation({
      query: (data: StatusIF) => ({
        url: `update/${data.id}`,
        method: "PATCH",
        body: { status: data.status }
      })
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateStatusMutation } = todoApi