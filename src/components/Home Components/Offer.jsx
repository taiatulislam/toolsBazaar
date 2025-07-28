import MultiMeter from "../../assets/offer/multi-meter.png";
import ToolBox from "../../assets/offer/tool-box-kit.png";
import Offer1 from "../../assets/offer/offer-1.png";
import Offer2 from "../../assets/offer/offer-2.png";
import Offer3 from "../../assets/offer/offer-3.png";
import Offer4 from "../../assets/offer/offer-4.png";

const Offer = () => {
  return (
    <div className="my-8 px-5">
      {/* Offer */}
      <div className="flex flex-row gap-6">
        {/* Offer 01 */}
        <div
          className="rounded-lg w-full px-10 py-16"
          style={{
            backgroundImage: `url(${MultiMeter})`,
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
          <button className="bg-yellow-300 font-semibold p-2 px-4 rounded-3xl cursor-pointer">
            Shop Now
          </button>
        </div>
        {/* Offer 02 */}
        <div
          className="rounded-lg w-full px-10 py-16"
          style={{
            backgroundImage: `url(${ToolBox})`,
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
          <button className="bg-yellow-300 font-semibold p-2 px-4 rounded-3xl cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>

      {/* Offer Card */}
      <div className="grid grid-cols-4 gap-5 mt-10">
        {/* Card-01 */}
        <OfferCard
          image={Offer1}
          title={"WoodWork Drill"}
          offerTitle={"Special Offers"}
          offer={"Now Get 15%"}
        ></OfferCard>

        {/* Card-02 */}
        <OfferCard
          image={Offer2}
          title={"Rechargeable Battery"}
          offerTitle={"Save Upto"}
          offer={"25%"}
        ></OfferCard>

        {/* Card-03 */}
        <OfferCard
          image={Offer3}
          title={"Jigsaw Tool"}
          offerTitle={"Started Price"}
          offer={"$50.00"}
        ></OfferCard>

        {/* Card-04 */}
        <OfferCard
          image={Offer4}
          title={"Power Tools"}
          offerTitle={"Get Best"}
          offer={"15% Flat off"}
        ></OfferCard>
      </div>
    </div>
  );
};

const OfferCard = ({ image, title, offerTitle, offer }) => {
  return (
    <div
      className="rounded-lg shadow-md border border-gray-200 relative h-[400px] p-8"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center-center",
      }}
    >
      <div className="bg-[#ffffff48] rounded-lg">
        <p className="text-2xl font-semibold uppercase">{title}</p>

        <div className="absolute bottom-10 right-10">
          <h3 className="text-red-400 text-lg font-bold ">{offerTitle}</h3>
          <h3 className="text-3xl font-bold">{offer}</h3>
        </div>
      </div>
    </div>
  );
};

export default Offer;
