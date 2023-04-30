import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URl = 'http://localhost:4000/recieps'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Reciep'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URl
    }),
    endpoints: builder => ({
        getRecieps: builder.query({
            query: (search) => `/?_sort=id&_order=desc&q=${search}`,
            providesTags: (result, error, search) => [{
                type: 'Reciep',
                id: search,
            }]
        }),
    })
    
})

export const { useGetReciepsQuery } = api