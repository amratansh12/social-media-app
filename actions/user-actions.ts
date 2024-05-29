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

export const updateUser = async (id: string, user: UpdateUserParams) => {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ userId: id }, user, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error("Unable to update the user");
    }

    return updatedUser;
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connectToDatabase();

    await User.findOneAndDelete({ userId: id });
  } catch (error) {
    handleError(error);
  }
};
