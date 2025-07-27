import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import Services from "../../components/Home Components/Services";
import Category from "../../components/Home Components/Category";
import Offer from "../../components/Home Components/Offer";
import Reviews from "../../components/Home Components/Reviews";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Home Components/Newsletter";
import BestSeller from "../../components/Home Components/BestSeller";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <div className="container m-auto">
        <Banner />
        <Services />
        <Category />
        <Offer />
        <Reviews />

        <BestSeller />
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
