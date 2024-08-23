"use client";
import Image from "next/image";
import React, { useState } from "react";

const Currency = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: "./singapore.svg",
      currency: "US Dollar",
      amount: "$ 24,500.900",
    },
    {
      image: "./singapore.svg",
      currency: "British Pounds",
      amount: "$ 24,500.900",
    },
    {
      image: "./sing-dollar.svg",
      currency: "Singapore Dollar",
      amount: "$ 24,500.900",
    },
    {
      image: "./sing-dollar.svg",
      currency: "Singapore Dollar",
      amount: "$ 24,500.900",
    },
    {
      image: "./ngn.svg",
      currency: "Nigeria Naira",
      amount: "$ 24,500.900",
    },
    {
      image: "./ngn.svg",
      currency: "Nigeria Naira",
      amount: "$ 24,500.900",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= cards.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center gap-4"> {/* Centered the cards and added spacing */}
        {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <div
            key={index}
            className="text-white bg-[#181818] w-[226px] h-[162px] rounded-[10px] flex flex-col items-center justify-center"
          >
            <div>
              <Image
                src={card.image}
                alt={card.currency}
                width={35}
                height={35}
              />
            </div>
            <div>
              <h1 className="text-[14px] opacity-50 text-center py-4">
                {card.currency}
              </h1>
              <h1 className="text-[25px]">{card.amount}</h1>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[162px] w-[40px] bg-[#181818] text-white p-2 rounded ml-2" // Added margin-left for spacing
      >
        <p className="text-[24px]">&lt;</p>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[162px] w-[40px] bg-[#181818] text-white p-2 rounded mr-2" // Added margin-right for spacing
      >
        <p className="text-[24px]">&gt;</p>
      </button>
    </div>
  );
};

export default Currency;
