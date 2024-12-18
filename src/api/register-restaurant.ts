import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  phone: string;
  email: string;
}

// Manter explicito torna o código mais legível,
// tira o "mágico" do enviar um body/data, sem
// saber o que tem dentro dele.
export const registerRestaurant = async ({
  restaurantName,
  managerName,
  phone,
  email,
}: RegisterRestaurantBody) => {
  return api.post("/authenticate", {
    restaurantName,
    managerName,
    phone,
    email,
  });
};
