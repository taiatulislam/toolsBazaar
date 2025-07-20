import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner";
import Category from "../../components/Home Components/Category";
import Category2 from "../../components/Home Components/Category2";
import Offer from "../../components/Home Components/Offer";
import Reviews from "../../components/Home Components/Reviews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <Category2 />
      <Offer />
      <Reviews />
    </>
  );
};

export default Home;
