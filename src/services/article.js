import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
const translateApiKey = import.meta.env.VITE_TRANSLATE_API_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const translationApi = createApi({
    reducerPath: 'translationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://aibit-translator.p.rapidapi.com/api/v1/translator/text',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', translateApiKey);
            headers.set('X-RapidAPI-Host', 'aibit-translator.p.rapidapi.com');
            headers.set('Content-Type', 'application/x-www-form-urlencoded');

            return headers;
        },
    }),
    endpoints: (builder) => ({
      getTranslate: builder.query({
        query: (params) => ({
          method: 'POST',
          body: new URLSearchParams({
            text: params.text,
            from: "auto",
            to: params.to,
          }),
        }),
        transformResponse: (response) => response.trans,
      }),      
    }),
})


export const {
  useLazyGetSummaryQuery,
  endpoints: { getSummary }
} = articleApi;


export const {
  useLazyGetTranslateQuery,
  endpoints: { getTranslation }
} = translationApi;

