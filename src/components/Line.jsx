"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Modal from "../components/Modal";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const DATA_COUNT = 12;

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const CurrencySelector = ({ label, defaultCurrency }) => {
    const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);

    const currencyOptions = {
      GBP: {
        name: "British Pound Sterling",
        icon: "./singapore.svg",
      },
      NGN: {
        name: "Nigerian Naira",
        icon: "./ngn.svg",
      },
      USD: {
        name: "United States Dollar",
        icon: "./sing-dollar.svg",
      },
    };

    const handleChange = (e) => {
      setSelectedCurrency(e.target.value);
    };

    return (
      <div>
        <p className="py-[15px]">{label}</p>
        <div className="bg-black p-2 rounded-md flex justify-between items-center">
          <select
            className="bg-black text-white p-2 rounded-md flex-grow appearance-none cursor-pointer hover:bg-[#181818]"
            value={selectedCurrency}
            onChange={handleChange}
            style={{
              WebkitAppearance: "none", // For Safari
              MozAppearance: "none", // For Firefox
              appearance: "none", // Standard
            }}
          >
            {Object.keys(currencyOptions).map((currency) => (
              <option
                key={currency}
                value={currency}
                className="bg-black text-white"
              >
                {currencyOptions[currency].name}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-1 ml-2">
            <Image
              src={currencyOptions[selectedCurrency].icon}
              alt={`${selectedCurrency} Icon`}
              width={18}
              height={18}
            />
            <h1>{selectedCurrency}</h1>
            <Image
              src="./dropdown.svg"
              alt="Dropdown Icon"
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>
    );
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: Array.from({ length: DATA_COUNT }, () =>
          Math.floor(Math.random() * 7000)
        ),
        borderColor: "yellow",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointBackgroundColor: "rgba(255, 255, 255, 0.5)",
        pointBorderColor: "rgba(0, 0, 0, 0.5)",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "",
        },
      },
      scales: {
        y: {
          grid: {
            display: true,
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      },
    },
  };

  const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="bg-[#181818] p-[20px] rounded-[20px] my-[30px]">
        <div className="mb-[40px]">
          <div>
            <h1 className="font-[600] text-[18px]">Exchange</h1>
            <h2 className="opacity-50 py-2 text-[14px]">Today</h2>
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <h1 className="flex">
                  <span className="text-[20px] font-[600] pr-2">€1</span>
                  <span className="opacity-50 text-[14px]">EUR</span>
                  <span className="px-2">=</span>
                  <span className="text-[20px] font-[600] pr-2">$952</span>
                  <span className="opacity-50 text-[14px]">USD</span>
                </h1>
                <button onClick={openModal}>
                  <Image
                    src="./exchange.svg"
                    alt="Exchange Icon"
                    width={24}
                    height={24}
                  />
                </button>

                <Modal show={isModalOpen} onClose={closeModal}>
                  <h2 className="text-[20px] mb-4 text-white">Exchange rate</h2>
                  <div>
                    <CurrencySelector label="From" defaultCurrency="USD" />
                    <div className="flex justify-center my-[20px]">
                      <Image
                        src="./modal-exchange.svg"
                        alt="Exchange Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <CurrencySelector label="To" defaultCurrency="NGN" />
                  </div>
                  <Link href={"#"}  className="flex justify-end items-end ">
                    <button  className="bg-[#FFD900] w-[150px] py-2  rounded-md text-black mt-4 ">
                      View Rates
                    </button>
                  </Link>
                </Modal>
              </div>
              <div className="gap-3 flex">
                <button className="text-black py-[5px] px-[16px] rounded-md bg-[#FFD900] text-[12px]">
                  Week
                </button>
                <button className="text-white py-[5px] px-[16px] rounded-md bg-black text-[12px]">
                  Month
                </button>
                <button className="text-white py-[5px] px-[16px] rounded-md bg-black text-[12px]">
                  Year
                </button>
                <button className="text-white py-[5px] px-[16px] rounded-md bg-black text-[12px]">
                  Max
                </button>
              </div>
            </div>
          </div>
        </div>
        <Line data={data} options={config.options} />
      </div>
    );
  };

  return <Home />;
};

export default LineChart;
