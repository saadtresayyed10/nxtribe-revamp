import { Footer } from "../_components/Footer";
import { NavbarLG } from "../_components/HomePage/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="w-full sticky top-0 z-50">
        <NavbarLG />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
