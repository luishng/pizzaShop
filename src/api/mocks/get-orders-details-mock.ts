import { http, HttpResponse } from 'msw'

import {
  getOrderDetailsParams,
  getOrderDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailsMock = http.get<
  getOrderDetailsParams,
  never,
  getOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123123123123123',
    },
    totalInCents: 5000,
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        quantity: 1,
        priceInCents: 1000,
        product: { name: 'Pizza Malagueta' },
      },
      {
        id: 'order-item-2',
        quantity: 2,
        priceInCents: 2000,
        product: { name: 'Pizza Mussarela' },
      },
    ],
  })
})
