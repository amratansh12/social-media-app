import { SearchUser } from "./_components/search-user";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <SearchUser />
      <section>{children}</section>
    </>
  );
};

export default HomeLayout;
