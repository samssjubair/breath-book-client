import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
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
        providesTags: ["Books"], // optional line for caching
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
    }),

    updateBook: builder.mutation({
      query: ({id,data}) => ({
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
      invalidatesTags: ["Books"],
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ["Comments"], // optional line for caching
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation
//   useGetBooksForHomePageQuery,
} = bookApi;
