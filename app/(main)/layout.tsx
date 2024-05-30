import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "./navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Toaster />
      <Navbar />
      <section>{children}</section>
    </>
  );
};

export default MainLayout;
