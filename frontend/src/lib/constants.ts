export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
  },
} as const;

export const TOKEN_KEY = "access_token";
export const USER_KEY = "auth-user";