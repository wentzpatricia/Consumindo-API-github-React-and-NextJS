export interface UsersInterface {
  login: string;
  id: string;
  avatar_url: string;
}

export interface DetailUsersInterface extends UsersInterface {
  company: string;
  location: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  name: string;
}
