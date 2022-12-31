import { Memories } from "./memories";

export interface Users {
  id: number;
  accessToken: string;
  nickname: string;
  email: string;
  memories: Array<Memories>;
  bio: string;
  friends: Array<Users>;
}
