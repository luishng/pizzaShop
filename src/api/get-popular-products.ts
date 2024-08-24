import { api } from '@/lib/axios'

export type getPopularProductsResponse = {
  amount: number
  product: string
}[]

export async function getPopularProducts() {
  const response = await api.get<getPopularProductsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
