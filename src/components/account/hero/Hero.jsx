"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function Hero() {
  const [activeCurrency, setActiveCurrency] = useState("USD");
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currencies = [
    { code: "USD", balance: "$3450.90", pending: "$2000.90" },
    { code: "SGD", balance: "S$3450.90", pending: "S$5000.90" },
    { code: "NGN", balance: "₦3450.90", pending: "₦5000.90" },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const renderCurrencySection = (currency) => (
    <div
      className={`w-full ${
        activeCurrency === currency.code ? "block" : "hidden"
      }`}
      key={currency.code}
    >
      <div className="bg-cover bg-center bg-[url('/account-bg.svg')] h-[168px] p-3 rounded-md">
        <div className="flex gap-2">
          <h1 className="text-[20px] opacity-70">Account visibility</h1>
          <Image
            src="/eye-icon.svg"
            alt="Toggle visibility"
            width={24}
            height={24}
            onClick={toggleBalanceVisibility}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 my-3">
              <h1 className="text-[18px] opacity-70">Total balance</h1>
              <Image
                src="/hexagon.svg"
                alt="Balance icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h1 className="text-[36px]">
                {isBalanceVisible
                  ? `${currency.balance} ${currency.code}`
                  : "*****"}
              </h1>
            </div>
          </div>
          <div>
            <div className="flex gap-2 my-2">
              <h1 className="text-[18px] opacity-70">Pending balance</h1>
              <Image
                src="/hexagon.svg"
                alt="Balance icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h1 className="text-[24px]">
                {currency.pending} {currency.code}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex gap-[60px] my-3">
        {currencies.map((currency) => (
          <div
            key={currency.code}
            className={`cursor-pointer inline-block border-b-2 pb-2 flex items-center gap-2 ${
              activeCurrency === currency.code
                ? "border-[#FFD900]"
                : "border-transparent"
            }`}
            onClick={() => setActiveCurrency(currency.code)}
          >
            <Image
              src={`/${
                currency.code === "SGD"
                  ? "sing-dollar"
                  : currency.code.toLowerCase()
              }.svg`}
              alt={currency.code}
              width={24}
              height={24}
            />
            <h1
              className={`font-bold ${
                activeCurrency === currency.code
                  ? "text-[#FFD900]"
                  : "text-white"
              }`}
            >
              {currency.code}
            </h1>
          </div>
        ))}
        <button className="flex items-center opacity-70" onClick={openModal}>
          Add Account
          
          <Image
            src="/plus.svg"
            alt="plus Icon"
            width={12}
            height={12}
            className="ml-2"
          />
        </button>

        <Modal show={isModalOpen} onClose={closeModal}>
          <div className="bg-cover bg-center bg-[url('/modal-bg.svg')] h-[108px] p-3 rounded-md">
            <h1 className="text-[24px] font-bold ">Add new account</h1>
            <p className="opacity-70">Add a currency account of your choice</p>
          </div>
          <div className="bg-black rounded-md">
            <div className="bg-black p-2 my-3 rounded-[20px] ">
              <div className="flex gap-2">
                
                <select className="w-full p-2 mb-3 rounded-md bg-black text-white">
                  <option value="usd">
                  <Image src="/usd.svg" alt="usd Icon" width={16} height={16} />United States Dollar</option>
                  <option value="eur">Euro</option>
                  <option value="gbp">British Pound</option>
                </select>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      {currencies.map(renderCurrencySection)}
    </div>
  );
}
