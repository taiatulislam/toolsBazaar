import React from "react";

export default function Services() {
  return (
    <div className="my-8 px-5">
      <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceItems.map((item) => (
          <Service key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const Service = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex items-center gap-4 p-5 rounded-xl shadow-sm bg-gray-100 cursor-pointer"
    >
      <img className="w-10" src={item.images} alt={item.title} />
      <div className="space-y-1">
        <h3 className="font-bold text-sm text-red-500">{item.title}</h3>
        <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
};

const serviceItems = [
  {
    id: "1",
    title: "FREE SHIPPING",
    description: "FREE SHIPPING ON ALL US ORDERS",
    images: "https://i.ibb.co/qFCW7M0K/home-icon.webp",
  },
  {
    id: "2",
    title: "ONLINE SUPPORT 24/7",
    description: "SUPPORT ONLINE 24 HOURS A DAY",
    images: "https://i.ibb.co/ym44cKpM/home-icon-2.webp",
  },
  {
    id: "3",
    title: "MONEY RETURN",
    description: "MONEY BACK GUARANTEE UNDER 7 DAYS",
    images: "https://i.ibb.co/mn85jsM/home-icon-3.webp",
  },
  {
    id: "4",
    title: "MEMBER DISCOUNT",
    description: "ON EVERY ORDER OVER $120.00",
    images: "https://i.ibb.co/CNN1J4T/home-icon-4.webp",
  },
];
