import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "./_components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Toaster />
      <div>
        <Navbar />
        <section>{children}</section>
      </div>
    </>
  );
};

export default MainLayout;
