import { Avatar, Card, Footer } from "flowbite-react";
import { useEffect, useState } from "react";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FetchRes } from "../service/API";
import RS_M from "../assets/RS_Dean.jpeg";
import RCP_S from "../assets/RAMA_PC.jpeg";
import SP_M from "../assets/mam.jpg";
import TZ_M from "../assets/Tanuja_AP.jpeg";

const Leadership = () => {
  const [data, setdata] = useState([]);

  const Img = [RS_M, RCP_S, SP_M, TZ_M];

  useEffect(() => {
    const FData = async () => {
      try {
        // console.log("Working");
        const response = await FetchRes("leaderships");
        // console.log(response.data); // Check the structure of the response
        setdata(response.data); // Store data in state if needed
        // console.log("Working end");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FData();
  }, []);

  return (
    <section className="bg-main-bg-2 md:p-12 p-6">
      {/* <div className="text-main-white md:text-6xl text-4xl font-semibold mb-8 md:mb-12">
        Leadership
      </div> */}
      <div className="flex overflow-x-auto space-x-4 md:space-x-8 md:ms-32 ms-4 my-12">
        {data.map((el, index) => (
          <Card
            key={index}
            className="min-w-[250px] max-w-sm bg-main-bg rounded-lg shadow-lg border-main-bg"
          >
            {/* {console.log("el ==> ", el.Link[0].Phone)} */}
            <div className="flex justify-end px-4 pt-4">
              {/* Optional icons or menu here */}
            </div>
            <div className="flex flex-col items-center pb-10">
              <Avatar img={Img[index]} alt={el["Name"]} rounded size="xl" />
              <h5 className="mt-4 mb-1 text-xl font-medium text-white dark:text-gray-900">
                {el["Name"]}
              </h5>
              <span className="text-sm text-gray-400 dark:text-gray-500">
                {el["Position"]}
              </span>
              <p className="my-5 mx-4 text-center text-base text-main-white dark:text-main-black sm:text-base">
                <span className="text-3xl">“</span> {el["Description"]}{" "}
                <span className="text-3xl">”</span>
              </p>
              <div className="flex space-x-6 sm:mt-4">
                <Footer.Icon
                  href={el["Link"][0]["Phone"]}
                  icon={BsTelephoneFill}
                />
                <Footer.Icon
                  href={el["Link"][0]["Mail"]}
                  fontSize={15}
                  icon={MdOutlineEmail}
                />
                <Footer.Icon
                  href={el["Link"][0]["Linkedin"]}
                  icon={BsLinkedin}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
      {/* Optional arrows for carousel navigation */}
    </section>
  );
};

export default Leadership;
