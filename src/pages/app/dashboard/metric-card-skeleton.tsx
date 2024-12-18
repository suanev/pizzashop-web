import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const MetricCardSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton className="mt-1 h-7 w-36" />
      <Skeleton className="h-4 w-52" />
    </React.Fragment>
  );
};

export default MetricCardSkeleton;
