import { GetDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import React from "react";
import MetricCardSkeleton from "./metric-card-skeleton";

const DaysOrdersAmountCard = () => {
  const { data: daysOrderAmount } = useQuery({
    queryKey: ["metrics", "dayOrdersAmount"],
    queryFn: GetDayOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {daysOrderAmount ? (
          <React.Fragment>
            <span className="text-2xl font-bold tracking-tight">
              {daysOrderAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {daysOrderAmount.diffFromYesterday >= 0 ? (
                <span className="text-emerald-500 dark:text-green-400">
                  +{daysOrderAmount.diffFromYesterday}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  {daysOrderAmount.diffFromYesterday}%
                </span>
              )}{" "}
              em relação a ontem
            </p>
          </React.Fragment>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
};

export default DaysOrdersAmountCard;
