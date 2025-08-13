import React from "react";
import { TfiEmail } from "react-icons/tfi";
import FooterLink from "./FooterLink";
import logo from "../../assets/logo.png";
import payment from "../../assets//svg/SSLCOMMERZ.svg";

export default function Footer() {
  return (
    <footer className="font-[sans-serif] bg-black py-12 font-montserrat bg-[url('https://i.ibb.co/1rwqq8k/footerbg.png')]">
      <div className="grid container mx-auto grid-cols-3 lg:grid-cols-6 gap-5 md:gap-12 px-5">
        <div className="col-span-2 lg:row-span-2">
          <img className="w-[150px] md:w-44 mb-4" src={logo} alt="Logo" />
          <ul className="space-y-5">
            <li>
              <a className="text-gray-300 hover:text-white text-[12px]">
                {" "}
                <p>Bashundhara, Dhaka-1212</p>{" "}
              </a>
            </li>

            <li className="text-gray-300 text-[15px] hover:text-red-600  flex items-center gap-1">
              {" "}
              <span>
                <TfiEmail></TfiEmail>
              </span>{" "}
              <p className="text-sm">tools****bazaar@gmail.com</p>
            </li>

            <li>
              <a className="text-text-primary text-[15px]">
                0000 - 0000 - 0000
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-text-primary text-base md:text-lg font-bold mb-5 font-montserrat mt-5 ">
            Know Us
          </h1>
          <ul className="space-y-2">
            <FooterLink path={"/"}>Home</FooterLink>
            <FooterLink path={"/aboutUs"}>About Us</FooterLink>
            <FooterLink path={"/contactUs"}>Contact</FooterLink>
            <FooterLink path={"/faq"}>FAQ</FooterLink>
            <FooterLink path={"/blogs"}>Blog</FooterLink>
          </ul>
        </div>

        <div>
          <h1 className="text-text-primary text-base md:text-lg font-bold mb-5 font-montserrat mt-5">
            Useful Link
          </h1>
          <ul className="space-y-2">
            <FooterLink path={"/"}>Store Map</FooterLink>
            <FooterLink path={"/"}>Help</FooterLink>
            <FooterLink path={"/"}>Services</FooterLink>
            <FooterLink path={"/"}>Search Product</FooterLink>
            <FooterLink path={"/"}>Search Product</FooterLink>
            <FooterLink path={"/"}>Career</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary text-base md:text-lg font-bold mb-5 font-montserrat mt-5">
            Information
          </h4>
          <ul className="space-y-2">
            <FooterLink path={"/"}>Order</FooterLink>
            <FooterLink path={"/"}>Order Status</FooterLink>
            <FooterLink path={"/"}>Deliveries</FooterLink>
            <FooterLink path={"/"}>Wishlist</FooterLink>
            <FooterLink path={"/"}>Search Product</FooterLink>
            <FooterLink path={"/"}>Refund Policy</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary text-base md:text-lg font-bold mb-5 font-montserrat mt-5 ">
            Special Offers
          </h4>
          <ul className="space-y-2">
            <FooterLink path={"/"}>Terms & Condition</FooterLink>
            <FooterLink path={"/"}>Terms of Service</FooterLink>
            <FooterLink path={"/"}>Privacy Policy</FooterLink>
            <FooterLink path={"/"}>Shipping Information</FooterLink>
            <FooterLink path={"/"}>Returns & Exchanges</FooterLink>
          </ul>
        </div>
      </div>

      <div className="border-b my-10 border-gray-800 w-full "></div>

      <div className="container mx-auto text-gray-300 text-sm flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 justify-between items-center px-5">
        <p className="text-left">
          &copy; {new Date().getFullYear()} - ToolsBazaar All Right Reserved.
        </p>
        <div className="flex flex-col md:flex-row justify-end items-center gap-2">
          <p>We Accepted</p>
          <img className="u-[90%] md:w-md mx-auto" src={payment} alt="" />
        </div>
      </div>
    </footer>
  );
}
