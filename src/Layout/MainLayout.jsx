import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="px-4 md:px-8 lg:px-16">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
