import OfferCard from "./OfferCard";


const Offer = () => {
  return (
    <div className="my-10">
      {/* Offer */}
      <div>
        <div className="flex flex-row gap-8">
          {/* Offer 01 */}
          <div
            className="rounded-lg w-full px-10 py-16"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/ScC8xjT/grid1-f919fb61-85d8-4d0d-b2bc-bf6f5e6b1285-1.png')",
              backgroundPosition: "center",
              borderRadius: "15px",
            }}
          >
            <h2 className="text-2xl font-bold">
              New Digital <br /> Multi Meter
            </h2>
            <h1 className="text-4xl font-bold my-5">
              Get 25% <br /> Flat Off
            </h1>
            <button
              className="bg-yellow-300 font-semibold p-2 px-4 rounded-3xl"
            >
              Shop Now
            </button>
          </div>
          {/* Offer 02 */}
          <div
            className="rounded-lg w-full px-10 py-16"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/wKzNBnB/grid2-31570f62-71de-452c-b475-a2ee295133a8-1.png')",
              backgroundPosition: "center",
              borderRadius: "15px",
            }}
          >
            <h2 className="text-yellow-400 text-2xl font-bold">
              Offer sale <br /> 10%-20% Discount
            </h2>
            <h1 className="text-white text-4xl font-bold my-5">
              Tools Kit <br /> Box
            </h1>
            <button
              className="bg-yellow-300 font-semibold p-2 px-4 rounded-3xl"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* Offer */}

      {/* Offer Card */}
      <div className="grid grid-cols-4 gap-5 mt-10">
        {/* Card-01 */}
        <OfferCard
          image={"https://i.ibb.co/PzCgYVW/1.png"}
          title={"WoodWork Drill"}
          offerTitle={"Special Offers"}
          offer={"Now Get 15%"}
        ></OfferCard>

        {/* Card-02 */}
        <OfferCard
          image={"https://i.ibb.co/CMfDrt9/2.png"}
          title={"Rechargeable Battery"}
          offerTitle={"Save Upto"}
          offer={"25%"}
        ></OfferCard>

        {/* Card-03 */}
        <OfferCard
          image={"https://i.ibb.co/ZVKn9Wm/3.png"}
          title={"Jigsaw Tool"}
          offerTitle={"Started Price"}
          offer={"$50.00"}
        ></OfferCard>

        {/* Card-04 */}
        <OfferCard
          image={"https://i.ibb.co/bX755vX/4.png"}
          title={"Power Tools"}
          offerTitle={"Get Best"}
          offer={"15% Flat off"}
        ></OfferCard>
      </div>
      {/* Offer Card */}
    </div>
  );
};

export default Offer;
