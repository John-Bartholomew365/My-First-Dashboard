"use client";

import Image from "next/image";
import React, { useState } from "react";

const Proof = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const CurrencySelector = ({ label, defaultCurrency }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);

    const currencyOptions = {
      GBP: {
        name: "British Pound Sterling",
        icon: "/singapore.svg",
      },
      NGN: {
        name: "Nigerian Naira",
        icon: "/ngn.svg",
      },
      USD: {
        name: "United States Dollar",
        icon: "/sing-dollar.svg",
      },
    };

    const handleChange = (e) => {
      setSelectedCurrency(e.target.value);
    };

    return (
      <div>
        <p className="py-[15px]">{label}</p>
        <div className="bg-[#181818] p-2 rounded-md flex justify-between items-center">
          <select
            className="bg-[#181818] text-white p-2 rounded-md flex-grow appearance-none cursor-pointer hover:bg-[#181818] flex items-center"
            value={selectedCurrency}
            onChange={handleChange}
            style={{ display: "flex", alignItems: "center" }}
          >
            {Object.keys(currencyOptions).map((currency) => (
              <option
                key={currency}
                value={currency}
                className="bg-black text-white flex items-center"
              >
                <span className="flex items-center">
                  {/* <Image
                    src={currencyOptions[currency].icon}
                    alt={`${currency} Icon`}
                    width={18}
                    height={18}
                    className="inline mr-2"
                  /> */}
                  {currencyOptions[currency].name}
                </span>
              </option>
            ))}
          </select>
          <div className="flex items-center gap-1 ml-2">
            <Image
              src={currencyOptions[selectedCurrency].icon}
              alt={`${selectedCurrency} Icon`}
              width={24}
              height={24}
            />
            <Image
              src="/dropdown.svg"
              alt="Dropdown Icon"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex justify-end mx-8 mt-4">
          <button className="bg-[#FFD900] text-black px-7 text-[14px] py-2 rounded-md">
            Download
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="pl-[20%] pt-20 mx-8">
      <div className="flex items-center justify-between">
        <div className="flex gap-5 cursor-pointer" onClick={toggleContent}>
          <div>
            <Image
              src="/account-statement.svg"
              alt="Statement"
              width={60}
              height={60}
            />
          </div>
          <div>
            <h1 className="font-[600] text-[24px]">Proof of account</h1>
            <p className="opacity-70 text-[14px]">
              Enable 2FA to protect your account from internal or external
              threat to your account.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={isOpen ? "/arrow-up.svg" : "/arrow-down.svg"}
            alt="arrow"
            width={40}
            height={40}
          />
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <CurrencySelector label="From" defaultCurrency="USD" />
        </div>
      )}
    </div>
  );
};

export default Proof;
