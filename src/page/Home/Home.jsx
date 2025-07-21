import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import Services from "../../components/Home Components/Services";
import Category from "../../components/Home Components/Category";
import Category2 from "../../components/Home Components/Category2";
import Offer from "../../components/Home Components/Offer";
import Reviews from "../../components/Home Components/Reviews";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container m-auto">
        <Banner />
        <Services />
        <Category />
        <Category2 />
        <Offer />
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
