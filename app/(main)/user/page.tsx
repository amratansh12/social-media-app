"use client";

import { getUserByUserId } from "@/actions/user-actions";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import DisplayBio from "./_components/display-bio";
import { Skeleton } from "@/components/ui/skeleton";

const page = () => {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [currentUser, setCurrentUser] = useState<UserDataParam>();

  useEffect(() => {
    const getUser = async () => {
      const userData = await getUserByUserId(id!);
      setCurrentUser(userData);
    };

    getUser();
  }, [id]);

  if (!currentUser) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl text-soft-black py-4 border-b-2 border-slate-300">
        User Profile &gt; {currentUser?.username}
      </h1>

      {user && (
        <div className="py-5 flex space-x-4 items-start border-b-2 border-slate-300">
          <Image
            src={currentUser?.profilePic!}
            width={60}
            height={60}
            alt="Profile Pic"
            className="aspect-square rounded-[100%]"
          />
          <div className="w-full">
            <h2 className="text-lg">
              {`${user.firstName} ${
                user.lastName !== null ? user.lastName : ""
              }`}
            </h2>
            <DisplayBio currentUser={currentUser!} user={user} />
          </div>
        </div>
      )}

      <h1 className="text-xl text-soft-black py-4">User Posts</h1>
    </div>
  );
};

export default page;

const ProfileSkeleton = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="py-4 border-b-2 border-slate-300 text-xl flex items-center gap-2">
        <Skeleton className="bg-soft-black/20 h-8 w-24" />
        &gt;
        <Skeleton className="bg-soft-black/20 h-8 w-20" />
      </div>

      <div className="py-5 flex space-x-4 items-start border-b-2 border-slate-300">
        <Skeleton className="bg-soft-black/20 h-[60px] w-[60px] rounded-full" />
        <div className="w-full space-y-2">
          <Skeleton className="bg-soft-black/20 w-32 h-8" />
          <Skeleton className="bg-soft-black/20 w-24 h-6" />
          <Skeleton className="bg-soft-black/20 w-60 h-8" />
        </div>
      </div>

      <div className="w-full py-4">
        <Skeleton className="bg-soft-black/20 h-8 w-24" />
        <div className="mt-4 grid grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-4 gap-1">
          <Skeleton className="w-full aspect-square bg-soft-black/20 rounded-sm" />
          <Skeleton className="w-full aspect-square bg-soft-black/20 rounded-sm" />
          <Skeleton className="w-full aspect-square bg-soft-black/20 rounded-sm" />
        </div>
      </div>
    </div>
  );
};
