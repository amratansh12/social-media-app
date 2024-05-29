type CreateUserParams = {
  userId: string;
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  profilePic?: string;
  bio?: string;
  posts: Array<string> | [];
};
