import { Button, Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { FetchRes } from "../service/API";

interface Props {
  NL?: Boolean;
}

const Banner = ({ NL }: Props) => {
  // NL -> Newsletter For 2nd Banner
  console.log(NL);
  const [data, setdata] = useState([
    {
      Title: "Test Tittle for Aces",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Image:
        "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&w=600",
      BText: "Get Now",
    },
    {
      Title: "Test Tittle for Aces",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Image:
        "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&w=600",
      BText: "Join Now",
    },
  ]);

  useEffect(() => {
    const FData = async () => {
      try {
        console.log("Working");
        const response = await FetchRes("banners");
        console.log(response); // Check the structure of the response
        setdata(response.data); // Store data in state if needed
        console.log("Working end");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const FNLData = async () => {
      try {
        console.log("Working");
        const response = await FetchRes("bannernls");
        console.log(response.data); // Check the structure of the response
        setdata(response.data); // Store data in state if needed
        console.log("Working end");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (NL === false) {
      FData();
      console.log(data);
    } else {
      FNLData();
    }
    // FData();
  }, []);

  return (
    <section
      id="Banner"
      className="ease-in duration-300 md:h-screen/2 p-6 sm:p-10 lg:p-20 h-screen-65 pb-8"
    >
      <Carousel>
        {data.map((el) => (
          <div key={el._id} className="carousel bg-main-black rounded-box">
            <div id="item1" className="block md:flex">
              <div className="w-full md:w-1/2">
                <img
                  src={el.Image}
                  className="w-full aspect-video object-cover rounded-lg"
                  alt="Banner Image"
                />
              </div>
              <div className="w-full md:p-8 p-4 mt-4 md:ml-14">
                <h1 className="text-main-white text-2xl md:text-5xl font-bold mb-4">
                  {el.Title || "Test"}
                </h1>
                <p className="text-main-white mb-6 text-sm md:text-base">
                  {el.Description}
                </p>
                <Button className="px-4 md:py-2 bg-main-sc-dark mt-3 md:mt-5">
                  {el.BText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
