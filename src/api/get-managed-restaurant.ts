import { api } from "@/lib/axios";

export interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  createdAt: string | null;
  updatedAt: string | null;
  managerId: string | null;
  description: string | null;
}

export const getManagedRestaurant = async () => {
  const response = await api.get<GetManagedRestaurantResponse>(
    "/managed-restaurant",
  );

  return response.data;
};
