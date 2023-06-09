import { configureStore } from "@reduxjs/toolkit"

import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { todoApi } from "../services/todo"

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})

setupListeners(store.dispatch)