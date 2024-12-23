import { http, HttpResponse } from 'msw'

import { DailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  DailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/02/2024', receipt: 2000 },
    { date: '02/02/2024', receipt: 3000 },
    { date: '03/02/2024', receipt: 5000 },
    { date: '04/02/2024', receipt: 1000 },
    { date: '05/02/2024', receipt: 40 },
    { date: '06/02/2024', receipt: 24444 },
  ])
})
