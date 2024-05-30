import NavMenu from "./nav-menu";
import { SearchUser } from "./search/search-user";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <main>
      <NavMenu />
      {children}
    </main>
  );
};

export default HomeLayout;
