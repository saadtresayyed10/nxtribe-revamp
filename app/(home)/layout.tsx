import { NavbarLG } from "../_components/HomePage/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="w-full sticky top-0 z-50">
        <NavbarLG />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
