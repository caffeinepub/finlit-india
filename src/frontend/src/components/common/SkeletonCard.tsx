import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div
      className="bg-card border border-border rounded-xl p-5 space-y-4"
      data-ocid="skeleton.loading_state"
    >
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <Skeleton className="h-32 w-full rounded-lg" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-24 rounded-md" />
        <Skeleton className="h-8 w-16 rounded-md" />
      </div>
    </div>
  );
}
