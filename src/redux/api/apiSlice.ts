import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://breath-book-server-bo0booj1c-samssjubair.vercel.app/api/v1" }),
//   tagTypes: ["Comments"], // optional line for caching
  endpoints: () => ({}),
});
