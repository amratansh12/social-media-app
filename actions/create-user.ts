"use server";

import { User } from "@/config/database/models/user.model";
import { connectToDatabase } from "@/config/database/mongoose";
import { handleError } from "@/lib/utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    if (!newUser) {
      throw new Error("Unable to create new user");
    }

    return newUser;
  } catch (error) {
    handleError(error);
  }
};
