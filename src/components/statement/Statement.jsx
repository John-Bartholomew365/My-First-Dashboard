"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaCalendar, FaCalendarAlt, FaLock, FaUserAlt } from "react-icons/fa";

const Statement = () => {
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
        <p className="py-[10px]">{label}</p>
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
            <h1 className="font-[600] text-[24px]">Statement of account</h1>
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
          <div className="mt-[40px] ">
            <h1>Currency</h1>
            <CurrencySelector label="" defaultCurrency="USD" />
          </div>
          <div className="flex items-center gap-[50px] my-[30px] w-full">
            <div>
              <h1>Start date</h1>
              <div>
                <div className="flex items-center justify-between rounded-md py-[16px] w-[470px] px-[16px] bg-[#181818] gap-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="MM/DD/YYYY"
                      className=" bg-[#181818] text-[14px] w-[100px] outline-none "
                    />
                  </div>
                  <div>
                    <FaCalendarAlt />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1>End date</h1>
              <div className="flex items-center justify-between rounded-md py-[16px] w-[470px] px-[16px] bg-[#181818] gap-2">
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    className=" bg-[#181818] text-[14px] w-[100px] outline-none "
                  />
                </div>
                <div>
                  <FaCalendarAlt />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1>File format</h1>
            <div className="bg-[#181818] py-2 rounded-md px-3 w-full">
              <select
                id="options"
                name="options"
                className="bg-[#181818] w-full "
              >
                <option value="pdf">PDF</option>
                <option value="pdf1">PDF 1</option>
                <option value="pdf2">PDF 2</option>
                <option value="pdf3">PDF 3</option>
              </select>
            </div>
          </div>    
          <div className="flex justify-end mt-4">
            <button className="bg-[#FFD900] text-black px-7 text-[14px] py-2 rounded-md">
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statement;
