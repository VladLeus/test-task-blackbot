import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IResponse} from "../../models/models.ts";


export const binanceApi = createApi({
    reducerPath: 'binance/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.binance.com'
    }),
    endpoints: build => ({
        fetchPrices: build.query<IResponse, string>({
            query: (currency: string) => ({
                url: '/api/v3/ticker/bookTicker',
                params: {
                    symbol: currency
                }
            })
        })
    })
})

export const {useFetchPricesQuery, useLazyFetchPricesQuery} = binanceApi;
