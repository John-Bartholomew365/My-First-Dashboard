"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function Hero() {
  const [activeCurrency, setActiveCurrency] = useState("USD");
  const [isFront, setIsFront] = useState(true);
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedItem, setCopiedItem] = useState("");

  const currencies = [
    { code: "USD", balance: "$3450.90", pending: "$2000.90" },
    { code: "SGD", balance: "$3450.90", pending: "S$5000.90" },
    { code: "NGN", balance: "₦3450.90", pending: "₦5000.90" },
  ];

  const handleCopy = (text, item) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedItem(item);
        setTimeout(() => setCopiedItem(""), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const handleCardClick = () => {
    setIsFront(!isFront);
  };

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
      <div className="bg-cover bg-center bg-[url('/account-bg.svg')] h-auto p-6 rounded-md">
        <div className="flex justify-between ">
          <div className="flex items-center justify-center gap-[40px]">
            <div className="flex items-center justify-center gap-[40px]">
              <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
                <Image
                  src={isFront ? "/card-front.svg" : "/card-back.svg"}
                  alt={
                    isFront ? "Tulu Purse Card Front" : "Tulu Purse Card Back"
                  }
                  width={350}
                  height={240}
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <h1 className="text-[18px] opacity-70">Card number</h1>
                      <button
                        onClick={() =>
                          handleCopy("1234 6357 8143 2345", "card")
                        }
                        className="ml-2"
                      >
                        <Image
                          src={
                            copiedItem === "card" ? "/check.svg" : "/copy.svg"
                          }
                          alt={copiedItem === "card" ? "Copied" : "Copy"}
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                    <p className="text-[20px]">1234 6357 8143 2345</p>
                  </div>
                </div>
                <div className="my-[20px]">
                  <div className="flex gap-2 items-center">
                    <h1 className="text-[18px] opacity-70">Account name</h1>
                    <button
                      onClick={() => handleCopy("David Adebayo", "account")}
                      className="ml-2"
                    >
                      <Image
                        src={
                          copiedItem === "account" ? "/check.svg" : "/copy.svg"
                        }
                        alt={copiedItem === "account" ? "Copied" : "Copy"}
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                  <p className="text-[20px]">David Adebayo</p>
                </div>
                <div className="flex gap-10">
                  <div>
                    <div className="flex gap-1 items-center">
                      <h1 className="text-[18px] opacity-70">Expiry date</h1>
                      <button
                        onClick={() => handleCopy("02/30", "expiry")}
                        className="ml-2"
                      >
                        <Image
                          src={
                            copiedItem === "expiry" ? "/check.svg" : "/copy.svg"
                          }
                          alt={copiedItem === "expiry" ? "Copied" : "Copy"}
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                    <p className="text-[20px]">02/30</p>
                  </div>
                  <div>
                    <div className="flex gap-1 items-center">
                      <h1 className="text-[18px] opacity-70">CVV</h1>
                      <button
                        onClick={() => handleCopy("030", "cvv")}
                        className="ml-2"
                      >
                        <Image
                          src={
                            copiedItem === "cvv" ? "/check.svg" : "/copy.svg"
                          }
                          alt={copiedItem === "cvv" ? "Copied" : "Copy"}
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                    <p className="text-[20px]">030</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-end items-end flex flex-col">
            <div className="flex gap-2 my-2 ">
              <h1 className="text-[18px] opacity-70">Account balance</h1>
              <Image
                src="/hexagon.svg"
                alt="Balance icon"
                width={24}
                height={24}
              />
            </div>
            <div>
              <h1 className="text-[40px]">
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
          Add card
          <Image
            src="/plus.svg"
            alt="plus Icon"
            width={12}
            height={12}
            className="ml-2"
          />
        </button>

        <Modal show={isModalOpen} onClose={closeModal}>
          <div className="h-[108px] p-3 rounded-md">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[24px] font-bold ">Add new card</h1>
                <p className="opacity-70">
                  Add a currency account of your choice
                </p>
              </div>

              <div className="text-lg" onClick={closeModal} style={{ cursor: "pointer" }}>&times;</div>
            </div>
          </div>

          <div className="bg-black rounded-md">
            <div className="bg-black p-2 my-3 rounded-[20px] ">
              <div className="flex gap-2">
                <select className="w-full p-2 mb-3 rounded-md bg-black text-white">
                  <option value="usd">
                    <Image
                      src="/usd.svg"
                      alt="usd Icon"
                      width={16}
                      height={16}
                    />
                    United States Dollar
                  </option>
                  <option value="eur">Euro</option>
                  <option value="gbp">British Pound</option>
                </select>
              </div>
            </div>
          </div>
          <div className="opacity-70 mx-[30px] my-4">
            A fee of $5.00 will be debited from your account for activating USD
            card
          </div>
          <div className="bg-[#FFD900] p-2 rounded-md flex text-black justify-center items-center font-500 w-[50%] mx-auto my-4">
            <button onClick={closeModal}>Get card</button>
          </div>
        </Modal>
      </div>
      {currencies.map((currency) => renderCurrencySection(currency))}
    </div>
  );
}
