import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default Page;
