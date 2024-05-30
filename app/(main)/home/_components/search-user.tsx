"use client";

import { searchUser } from "@/actions/search-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import UserAvatar from "./user-avatar";

export const SearchUser = () => {
  const [userSearch, setUserSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<UserDataParam[]>([]);

  const handleUserSearch = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = await searchUser(userSearch);

      setUsers(data!);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    setUserSearch("");
  };

  return (
    <div className="flex flex-col justify-center items-center py-4 md:py-10 space-y-4">
      <form
        className="w-full flex justify-center items-center"
        onSubmit={handleUserSearch}
      >
        <Input
          className="w-1/2 rounded-r-none"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          placeholder="Search users"
          disabled={loading}
        />
        <Button className="rounded-l-none" type="submit">
          {loading ? (
            <Loader2 className="text-dark-blue-100 animate-spin h-5 w-5" />
          ) : (
            <Image
              src="/assets/search.svg"
              width={20}
              height={20}
              alt="Search"
            />
          )}
        </Button>
      </form>
      {users.length > 0 && (
        <section className="w-full px-8 md:px-12 flex flex-col items-center space-y-2">
          <h2 className="text-xl">Search Results</h2>
          {users.map((user) => (
            <UserAvatar
              username={user.username}
              firstName={user.firstName}
              lastName={user.lastName}
              profilePic={user.profilePic!}
              userId={user.userId}
            />
          ))}
        </section>
      )}
    </div>
  );
};
