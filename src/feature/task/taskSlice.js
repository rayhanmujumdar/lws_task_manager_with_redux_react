import { apiSlice } from "../api/apiSlice";

export const taskSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
    }),
  }),
});

export const { useGetTasksQuery } = taskSlice;
