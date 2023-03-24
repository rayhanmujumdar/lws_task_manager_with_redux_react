import { apiSlice } from "../api/apiSlice";
export const projectsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => `/projects`,
    }),
    getProject: builder.query({
      query: (name) => `/projects?projectName_like=${name}`
    })
  }),
});

export const {useGetProjectsQuery} = projectsApi;
