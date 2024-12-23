import { http, HttpResponse } from 'msw'

import { getPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  getPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 001', amount: 15 },
    { product: 'Pizza 001', amount: 25 },
    { product: 'Pizza 001', amount: 5 },
    { product: 'Pizza 001', amount: 65 },
    { product: 'Pizza 001', amount: 35 },
  ])
})
