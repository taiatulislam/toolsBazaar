import Slider from "react-slick";
import Img1 from "../../src/assets/banner/yellow-drill-1.png";
import bg1 from "../../src/assets/banner/bg1.png";
import Img2 from "../../src/assets/banner/yellow-tools-kit-1.png";
import bg2 from "../../src/assets/banner/bg2.png";
import Img3 from "../../src/assets/banner/yellow-chainsaw1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
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
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="mt-2 drop-shadow rounded-3xl px-5">
      <Slider {...settings}>
        {bannerData.map((data) => (
          <div key={data?.id}>
            {/* Banner section */}
            <div
              className="p-5 rounded-3xl h-[85vh] flex justify-center items-center"
              style={{
                backgroundImage: `url(${data?.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "1.5rem",
              }}
            >
              <div className="container p-8">
                <div className="grid grid-cols-1 w-full">
                  {/* text content section */}
                  <div className="flex flex-col w-screen justify-center gap-4 pt-12 text-center order-2 relative z-10">
                    <h1 className="text-2xl font-bold">{data?.subtitle}</h1>
                    <h1 className="text-7xl font-bold">{data?.title}</h1>
                    <h1 className="text-5xl min-w-full uppercase text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-brandYellow/90 to-[#fff]/90 text-[100px] font-bold">
                      {data?.title2}
                    </h1>
                    <div>
                      <button
                        className={`bg-[#fdc62e] text-black cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-1`}
                      >
                        Shop By Category
                      </button>
                    </div>
                  </div>
                  {/* Img section */}
                  <div className="order-2">
                    <div>
                      <img
                        src={data?.img}
                        alt="banner"
                        className="w-[300px] h-[200px] scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px rgba(0,0,0,.4)] relative z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
