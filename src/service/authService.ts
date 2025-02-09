import apiClient from "../api/apiClient";
import { LoginPayload, RegisterPayload } from "../types/auth.types";

export const AuthService = {
  register: async (data: RegisterPayload) => {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  },

  login: async (data: LoginPayload) => {
    const payload = {
      email: data.email,
      password: data.password
    }
    const response = await apiClient.post("/auth/login", payload, {
      headers: { device_id: data.device_id },
    });

    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    return response.data;
  },

  logout: async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
