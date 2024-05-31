"use server";

import { Message } from "@/config/database/models/message.model";
import { User } from "@/config/database/models/user.model";
import { connectToDatabase } from "@/config/database/mongoose";
import { handleError } from "@/lib/utils";

export const createMessage = async (
  content: string,
  senderId: string,
  targetId: string
) => {
  try {
    await connectToDatabase();

    const sender = await User.findOne({ userId: senderId });
    const sendee = await User.findOne({ userId: targetId });

    const newMessage = await Message.create({
      message: content,
      sendBy: sender._id,
      sendTo: sendee._id,
    });

    if (!newMessage) {
      throw new Error("Unable to create a message");
    }

    return newMessage.message;
  } catch (error) {
    handleError(error);
  }
};

export const getMessageByUserAndSender = async (
  sendById: string,
  sendToId: string
) => {
  try {
    await connectToDatabase();

    const messages = await Message.find({
      sendBy: sendById,
      sendTo: sendToId,
    });

    if (!messages) {
      throw new Error("Unable to fetch messages");
    }

    return JSON.stringify(messages);
  } catch (error) {
    handleError(error);
  }
};
