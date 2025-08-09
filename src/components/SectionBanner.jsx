import bannerImage from "../assets/banner/section-banner.jpg";

const SectionBanner = ({ title, subTitle }) => {
  return (
    <div
      className="h-[120px] pt-5 pl-20 text-white"
      style={{
        backgroundImage: `linear-gradient(to right, #000000c9, #000000a1), url(${bannerImage})`,
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      <h2 className="text-3xl font-semibold mb-3">{title}</h2>
      <h3 className="text-lg">{subTitle}</h3>
    </div>
  );
};

export default SectionBanner;
