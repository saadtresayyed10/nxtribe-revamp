import { NavbarLG } from "../_components/HomePage/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <NavbarLG />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
