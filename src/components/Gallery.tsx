// import React from "react";
import { Masonry } from "@mui/lab";
import { HeroHoverImg } from "./HoverImg";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  // const data = [
  //   {
  //     image:
  //       "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb",
  //     id: 1,
  //     h: 520,
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb",
  //     id: 2,
  //     h: 420,
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb",
  //     id: 3,
  //     h: 620,
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb",
  //     id: 4,
  //     h: 620,
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb",
  //     id: 5,
  //     h: 520,
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb",
  //     id: 6,
  //     h: 420,
  //   },
  //   // {
  //   //   image:
  //   //     "https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb",
  //   //   id: 6,
  //   //   h: 120,
  //   // },
  // ];

  return (
    <section className="md:px-36 md:py-24 p-8">
      <div className="text-center mb-14">
        <h1 className="text-main-sc-dark text-5xl font-semibold md::mb-12 mb-6">
          Follow Us On <span className="text-main-sc-light">Instagram</span>{" "}
        </h1>
        <p className="text-main-sc-light text-2xl md:w-1/2 md:m-auto text-justify">
          Discover the dynamic journey of ACES through our gallery, showcasing a
          united effort in organizing various cultural and technical events.
        </p>
      </div>
      {/* <Masonry
        columns={3}
        spacing={4}
        defaultHeight={450}
        defaultColumns={3}
        defaultSpacing={1}
      >
        {data.map((el) => (
          <div key={el.id} className="">
            <img
              key={el.id}
              src={el.image}
              style={{ height: el.h, width: "100%" }}
              className="rounded-box"
            />
          </div>
        ))}
      </Masonry> */}
      <div className="rounded z-40">
        <HeroHoverImg />
      </div>
    </section>
  );
};

export default Gallery;
