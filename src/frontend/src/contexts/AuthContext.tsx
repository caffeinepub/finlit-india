import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("finlit-user");
    if (stored) {
      try {
        setUser(JSON.parse(stored) as User);
      } catch {
        localStorage.removeItem("finlit-user");
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const usersRaw = localStorage.getItem("finlit-users");
    const users: (User & { password: string })[] = usersRaw
      ? JSON.parse(usersRaw)
      : [];
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (found) {
      const { password: _pw, ...userWithoutPw } = found;
      void _pw;
      setUser(userWithoutPw);
      localStorage.setItem("finlit-user", JSON.stringify(userWithoutPw));
      return true;
    }
    return false;
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> => {
    const usersRaw = localStorage.getItem("finlit-users");
    const users: (User & { password: string })[] = usersRaw
      ? JSON.parse(usersRaw)
      : [];
    if (users.find((u) => u.email === email)) return false;
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      role: "user" as const,
    };
    users.push(newUser);
    localStorage.setItem("finlit-users", JSON.stringify(users));
    const { password: _pw, ...userWithoutPw } = newUser;
    void _pw;
    setUser(userWithoutPw);
    localStorage.setItem("finlit-user", JSON.stringify(userWithoutPw));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("finlit-user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
