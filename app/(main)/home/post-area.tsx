"use client";

import { getPost } from "@/actions/post-actions";
import { useEffect, useState } from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const PostArea = () => {
  const [posts, setPosts] = useState<PostParams[]>([]);
  const [noPosts, setNoPosts] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPost();

      if (data?.length === 0) {
        setNoPosts(true);
      }

      setPosts(JSON.parse(data!));
    };

    fetchPosts();

    console.log(posts);
  }, []);

  if (posts.length === 0 && !noPosts) {
    return <PostAreaSkeleton />;
  }

  if (noPosts) {
    return <div>No posts to show</div>;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.length > 0 &&
        posts.map((post) => (
          <Card className="flex">
            <CardHeader>
              <Image
                src={post.imageUrl}
                width={300}
                height={300}
                alt="Image"
                className="rounded-md shadow-sm border border-slate-300"
              />
            </CardHeader>

            <CardFooter className="flex flex-col items-start gap-2 my-6 mr-6 flex-1">
              <CardTitle>{post.author.firstName}</CardTitle>
              <CardDescription>{post.caption}</CardDescription>
              <CardDescription>
                created at {post.createdAt.toString()}
              </CardDescription>
              <CardDescription className="text-dark-blue-200">
                {post.hashtags}
              </CardDescription>
            </CardFooter>
          </Card>
        ))}
    </section>
  );
};

export default PostArea;

const PostAreaSkeleton = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Skeleton className="h-60 w-full bg-soft-black/20 shadow-sm rounded-md" />
      <Skeleton className="h-60 w-full bg-soft-black/20 shadow-sm rounded-md" />
      <Skeleton className="h-60 w-full bg-soft-black/20 shadow-sm rounded-md" />
    </section>
  );
};
