import Image from "next/image";

const Page = () => {
  return (
    <div className="py-24 flex justify-center items-center">
      <div className="flex flex-col justify-center space-y-4">
        <h2 className="bg-white rounded-lg shadow-sm px-4 py-5 text-center">
          Welcome to LoopSocial
        </h2>
        <Image
          src="/assets/home-illustration.jpg"
          height={500}
          width={500}
          alt="Social Media App"
          className="w-[300px] md:w-[500px] aspect-square rounded-lg"
        />
      </div>
    </div>
  );
};

export default Page;
