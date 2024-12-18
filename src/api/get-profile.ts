import { api } from "@/lib/axios";

export interface GetProfileResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "manager" | "costumer";
  createdAt: string | null;
  updatedAt: string | null;
}

export const getProfile = async () => {
  const response = await api.get<GetProfileResponse>("/me");

  return response.data;
};
