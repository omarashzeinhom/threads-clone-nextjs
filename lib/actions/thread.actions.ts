"use server";

import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  author: string;
  communityId:  null;
  path: string;
}

export async function createThread({
  text,
  author,
  communityId,
  path,
}: Params) {
  try {
    connectToDB();

    const createThread = await Thread.create({
      text,
      author,
      community: communityId || null,
    });
    // Update user model

    await User.findByIdAndUpdate(author, {
      $push: { threads: createThread._id },
    });

    // revalidate path

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error?.message}`);
  }
}
