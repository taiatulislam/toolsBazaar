import React from "react";
import Banner from "../../components/Banner";
import Services from "../../components/Home Components/Services";
import Category from "../../components/Home Components/Category";
import Offer from "../../components/Home Components/Offer";
import Reviews from "../../components/Home Components/Reviews";
import Newsletter from "../../components/Home Components/Newsletter";
import BestSeller from "../../components/Home Components/BestSeller";
import { Outlet } from "react-router";
import Brands from "../../components/Brands";

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
      <Brands />
      <Newsletter />
    </div>
  );
};

export default Home;
