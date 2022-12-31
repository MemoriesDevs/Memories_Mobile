import { Users } from "./users";
export type AuthContextType = {
  user: Users;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string, nickName: string) => void;
};
