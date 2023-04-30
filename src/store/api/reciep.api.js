import { api } from "./api";

export const reciepApi = api.injectEndpoints({
    endpoints: builder => ({
        createReciep: builder.mutation({
            query: (reciep) => ({
                body: reciep,
                url: '/',
                method: 'POST'
            }),
            invalidatesTags: () => [{
                type: 'Reciep'
            }]
        })
    })
})

export const { useCreateReciepMutation } = reciepApi