import { create } from "zustand";

type Role = "CLIENT" | "EXPERT" | null;

interface User {
  id: string;
  full_name: string;
  email: string;
  role: Role;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;

  signup: (data: {
    full_name: string;
    email: string;
    password: string;
  }) => Promise<void>;

  updateRole: (role: "CLIENT" | "EXPERT") => Promise<void>;
}

const API_URL = "http://localhost:8000";

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: false,
  error: null,

  signup: async ({ full_name, email, password }) => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail || "Signup failed");

      set({ user: data, loading: false });

      // temp persistence (until JWT)
      localStorage.setItem("user", JSON.stringify(data));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  updateRole: async (role) => {
    const user = get().user;
    if (!user) return;

    set({ loading: true, error: null });

    try {
      const res = await fetch(`${API_URL}/users/${user.id}/role`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail || "Role update failed");

      set({ user: data, loading: false });
      localStorage.setItem("user", JSON.stringify(data));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
