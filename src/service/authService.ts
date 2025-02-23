import apiClient from "../api/apiClient";
import { LoginPayload, RegisterPayload } from "../types/auth.types";

export const AuthService = {
  register: async (data: RegisterPayload) => {
    return await apiClient.post("/auth/register", data);
  },

  login: async (data: LoginPayload) => {
    const payload = {
      email: data.email,
      password: data.password
    }
    return await apiClient.post("/auth/login", payload, {
      headers: { device_id: data.device_id },
    });
  },

  logout: async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
