import { api } from "@/lib/axios";

export interface GetDayOrdersAmountResponse {
  amount: number;
  diffFromYesterday: number;
}

export const GetDayOrdersAmount = async () => {
  const response = await api.get<GetDayOrdersAmountResponse>(
    "/metrics/day-orders-amount",
  );

  return response.data;
};
