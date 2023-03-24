import { apiSlice } from "../api/apiSlice";

export const taskSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
    }),
    getTask: builder.query({
      query: (id) => `/tasks/${id}`,
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: newTask } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              draft.push(newTask);
            })
          );
        } catch (err) {}
      },
    }),
    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const { data: editTask } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              const findTaskIndex = draft.findIndex((task) => task.id == id);
              draft[findTaskIndex] = editTask;
            })
          );
          dispatch(
            apiSlice.util.updateQueryData("getTask", id.toString(), (draft) => {
              return editTask;
            })
          );
        } catch (err) {}
      },
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        const optimisticDelete = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            return draft.filter((task) => task.id != args);
          })
        );
        try {
          await queryFulfilled;
        } catch (err) {
          optimisticDelete.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = taskSlice;
