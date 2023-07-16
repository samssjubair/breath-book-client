import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    getBooks: builder.query({
      query: ({ page, limit, sort, searchTerm }) => {
        let queryString = `/books?searchTerm=${searchTerm}`;

        if (page && limit && sort) {
          queryString += `?page=${page}&limit=${limit}&sort=-${sort}`;
        }



        return queryString;
      },
    }),

    // postComment: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/comment/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Comments"], // it will invalidate the cache for the Comments tag
    // }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ["Comments"], // optional line for caching
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
//   useGetBooksForHomePageQuery,
} = bookApi;
