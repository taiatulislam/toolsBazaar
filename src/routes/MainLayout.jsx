import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return null;
};

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="relative">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
