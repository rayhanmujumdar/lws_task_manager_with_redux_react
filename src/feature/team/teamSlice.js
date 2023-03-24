import { apiSlice } from "../api/apiSlice";

export const teamSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeams: builder.query({
            query: () => `/team`
        })
    })
})

export const {useGetTeamsQuery} = teamSlice