import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="py-3 px-4 md:px-10 flex justify-between items-center bg-soft-black shadow-sm shadow-soft-black">
      <div className="flex items-center space-x-1">
        <Image src="/logo.png" width={54} height={54} alt="Logo" />
        <h2 className="text-2xl text-dark-blue-100 font-bold">LoopSocial</h2>
      </div>

      <SignedOut>
        <ClerkLoading>
          <Loader2 className="animate-spin text-dark-blue-100 h-8 w-8" />
        </ClerkLoading>
        <ClerkLoaded>
          <Button variant="custom">
            <SignInButton />
          </Button>
        </ClerkLoaded>
      </SignedOut>

      <SignedIn>
        <ClerkLoading>
          <Loader2 className="animate-spin text-dark-blue-100 h-8 w-8" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </SignedIn>
    </nav>
  );
};
