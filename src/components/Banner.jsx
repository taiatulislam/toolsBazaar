import Slider from "react-slick";
import Img1 from "../../src/assets/banner/yellow-drill-1.png";
import bg1 from "../../src/assets/banner/bg1.png";
import Img2 from "../../src/assets/banner/yellow-tools-kit-1.png";
import bg2 from "../../src/assets/banner/bg2.png";
import Img3 from "../../src/assets/banner/yellow-chainsaw1.png";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const bannerData = [
    {
      id: 1,
      bg: bg1,
      img: Img1,
      subtitle: "Order Now and Get",
      title: "20% off on",
      title2: "Drill Machine",
    },
    {
      id: 2,
      bg: bg2,
      img: Img2,
      subtitle: "Order Today and Get",
      title: "22% off on",
      title2: "Tools Kit",
    },
    {
      id: 3,
      img: Img3,
      bg: bg2,
      subtitle: "Get This Week",
      title: "25% off on",
      title2: "Chainsaw",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="mt-2 drop-shadow rounded-3xl px-5">
      <Slider {...settings}>
        {bannerData.map((data) => (
          <div key={data?.id}>
            {/* Banner section */}
            <div
              className="p-20 overflow-hidden rounded-[16px] min-h-[650px] hero-bg-color flex justify-center items-center"
              style={{
                backgroundImage: `url(${data?.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "1rem",
              }}
            >
              <div className="grid grid-cols-2 w-full">
                {/* text content section */}
                <div className="flex flex-col w-screen justify-center">
                  <h1 className="text-2xl font-bold">{data?.subtitle}</h1>
                  <h1 className="text-7xl font-bold">{data?.title}</h1>
                  <h1
                    className="text-[150px] uppercase text-nowrap text-transparent bg-clip-text bg-gradient-to-r
                  from-primary/90 to-[#fff]/90 font-bold -mt-10"
                  >
                    {data?.title2}
                  </h1>
                  <div>
                    <button
                      onClick={() => navigate("/shop")}
                      className={`bg-[#fdc62e]/90 text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full`}
                    >
                      Shop By Category
                    </button>
                  </div>
                </div>
                {/* Img section */}
                <img
                  src={data?.img}
                  alt="banner"
                  className="w-[450px] h-[450px] scale-105 object-contain mx-auto drop-shadow-[-8px_4px_6px_◎□ rgba(0,0,0,.4)]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
