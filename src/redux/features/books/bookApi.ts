import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    getBooks: builder.query({
      query: ({ page, limit, sort, searchTerm="", year="",genre="" }) => {
        let queryString = `/books`;

        if (page && limit && sort) {
          queryString += `?page=${page}&limit=${limit}&sort=-${sort}`;
        }

        if (searchTerm || year || genre) {
            queryString += `?searchTerm=${searchTerm}&publicationYear=${year}&genre=${genre}`;
        }

        return queryString;
      },
    }),

    postBook: builder.mutation({
      query: (data ) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
    //   invalidatesTags: ["Comments"], // it will invalidate the cache for the Comments tag
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
//   useGetBooksForHomePageQuery,
} = bookApi;
