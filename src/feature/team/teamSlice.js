import { apiSlice } from "../api/apiSlice";

export const teamSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => `/team`,
    }),
    getTeam: builder.query({
      query: (name) => `/team?name_like=${name}`,
    }),
  }),
});

export const { useGetTeamsQuery } = teamSlice;
