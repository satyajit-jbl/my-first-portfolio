// import { Outlet } from "react-router-dom";
// import { Navbar } from "../components/Navbar";
// import { Footer } from "../components/Footer";

// const MainLayout = () => {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       <Navbar />
//       <main className="px-4 md:px-8 lg:px-16">
//         <Outlet />
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default MainLayout;
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Gradient background */}
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <Navbar />
      <main className="px-4 md:px-8 lg:px-16">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
