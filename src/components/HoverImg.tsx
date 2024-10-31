import { useAnimate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiMousePointer } from "react-icons/fi";
import News from "../assets/News.png";
import { FetchRes } from "../service/API";

export const HeroHoverImg = () => {
  // const [Image, setImage] = useState([]);
  const [Images, setImages] = useState([]);

  const image = [
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  useEffect(() => {
    const FData = async () => {
      try {
        console.log("Working");
        const response = await FetchRes("galleries");
        console.log(response); // Check the structure of the response

        // Assuming response.data is an array of objects with an "Image" field
        const imageUrls = response.data.map((el) => el.Image);
        setImages(imageUrls);
        console.log("Images Loaded:", imageUrls);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FData();
  }, []);

  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={image.length ? image : ["fallback-image-url"]}
    >
      <section className="grid h-screen w-full place-content-center bg-main-bg-2 rounded-box">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-main-white">
          <FiMousePointer />
          <span>Image Gallery</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}: any) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map(
        (img: string | undefined, index: React.Key | null | undefined) => (
          <img
            className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
            src={img}
            alt={`Mouse move image ${index}`}
            key={index}
            data-mouse-move-index={index}
          />
        )
      )}
    </div>
  );
};
