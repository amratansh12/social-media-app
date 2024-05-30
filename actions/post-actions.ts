"use server";

import { Post } from "@/config/database/models/post.model";
import { User } from "@/config/database/models/user.model";
import { handleError } from "@/lib/utils";

export const CreatePost = async (image: CreatePostParams) => {
  try {
    const { userId, caption, imageUrl, place, hashtags } = image;

    const user = await User.findOne({ userId: userId });

    const newImage = await Post.create({
      author: user._id,
      caption,
      imageUrl,
      place,
      hashtags,
    });

    if (!newImage) {
      throw new Error("Unable to create Post");
    }
  } catch (error) {
    handleError(error);
  }
};
