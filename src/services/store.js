import { configureStore } from "@reduxjs/toolkit";

import { articleApi, translationApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
        [translationApi.reducerPath]: translationApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware, translationApi.middleware),
})