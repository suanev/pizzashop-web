import { api } from "@/lib/axios";

export interface SignInBody {
  email: string;
}

export const signIn = async ({ email }: SignInBody) => {
  return api.post("/authenticate", { email });
};
