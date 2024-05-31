interface CreatePostParams {
  userId: string;
  caption: string;
  hashtags?: string;
  place?: string;
  imageUrl: string;
}

interface PostParams {
  author: Types.ObjectId;
  caption: string;
  imageUrl: string;
  place?: string;
  hashtags?: string;
  likes: Types.ObjectId[];
  comments: Types.ObjectId[];
  createdAt: Date;
}
