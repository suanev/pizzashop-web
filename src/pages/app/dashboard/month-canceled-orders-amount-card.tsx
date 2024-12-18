import { GetMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import React from "react";
import MetricCardSkeleton from "./metric-card-skeleton";

const MonthCanceledOrdersAmountCard = () => {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryKey: ["metrics", "month-orders-canceled-amount"],
    queryFn: GetMonthCanceledOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount ? (
          <React.Fragment>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount}
            </span>

            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth <= 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  {monthCanceledOrdersAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  +{monthCanceledOrdersAmount.diffFromLastMonth}%
                </span>
              )}{" "}
              em relação ao mês anterior
            </p>
          </React.Fragment>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
};

export default MonthCanceledOrdersAmountCard;
