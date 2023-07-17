import { FullTagDescription } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["BookDetail"].map((tag) => ({ type: tag })) as FullTagDescription<never>[]
    }),
    getBooks: builder.query({
      query: ({
        page,
        limit,
        sort,
        searchTerm = "",
        year = "",
        genre = "",
      }) => {
        let queryString = `/books`;

        if (page && limit && sort) {
          queryString += `?page=${page}&limit=${limit}&sort=-${sort}`;
        }

        if (searchTerm || year || genre) {
          queryString += `?searchTerm=${searchTerm}&publicationYear=${year}&genre=${genre}`;
        }

        return queryString;
      },
      providesTags: ["Books"].map((tag) => ({ type: tag })) as FullTagDescription<never>[], // optional line for caching
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"] as unknown as FullTagDescription<never>[],
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/reviews/${id}`,
        method: "POST",
        body: data
      }),
        invalidatesTags: ["BookDetail"] as unknown as FullTagDescription<never>[],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  usePostReviewMutation
} = bookApi;
