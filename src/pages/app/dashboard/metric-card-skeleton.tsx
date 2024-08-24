import { Skeleton } from '@/components/ui/skeleton'

export default function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-36" />
      <Skeleton className="h-7 w-36" />
    </>
  )
}
