import Image from "next/image";
import React from "react";
import { TbSearch } from "react-icons/tb";
import { TbCalendar } from "react-icons/tb";

const Transaction = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3">
          <div className="bg-[#181818] py-2 rounded-md px-3 w-fit">
            <select id="options" name="options" className="bg-[#181818]">
              <option value="alltransactions">All transactions</option>
              <option value="sent">Sent</option>
              <option value="received">Receive</option>
              <option value="exchange">Exchange</option>
            </select>
          </div>
          <div className="bg-[#181818] py-2 rounded-md px-3 w-fit">
            <select id="options" name="options" className="bg-[#181818]">
              <option value="alltransactions">All currencies</option>
              <option value="sent">USD</option>
              <option value="received">NGN</option>
              <option value="exchange">GBP</option>
              <option value="exchange">SGD</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#181818] w-[150px] py-2 rounded-md px-3 ">
            <div className="flex items-center justify-center gap-2">
              <TbSearch />
              <input
                type="text"
                placeholder="Search..."
                className=" bg-[#181818] text-[14px] w-[70px] outline-none "
              />
            </div>
          </div>
          <div className="bg-[#181818] w-[150px] py-2 rounded-md px-3 ">
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                placeholder="MM/YYYY"
                className=" bg-[#181818] text-[14px] w-[70px] outline-none "
              />
              <TbCalendar />
            </div>
          </div>
          <div className="bg-[#181818] w-[150px] py-2 rounded-md px-3 ">
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                placeholder="MM/YYYY"
                className=" bg-[#181818] text-[14px] w-[70px] outline-none "
              />
              <TbCalendar />
            </div>
          </div>
        </div>
      </div>
      <div className="my-[30px]">
        <h1 className="text-[20px] font-bold py-[15px]">Transactions</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-[gray-700] uppercase bg-gray-50 my-3 dark:bg-[#181818] dark:text-gray-400">
              <tr className="my-3">
                <th scope="col" className="px-6 py-3">
                  Transaction details
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#0F0F0F]">
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/swap.svg"
                      alt="Exchange Icon"
                      width={34}
                      height={34}
                    />
                    USD - EUR
                  </div>
                </th>
                <td className="px-6 py-4">Exchange</td>
                <td className="px-6 py-4">23 August 2024</td>
                <td className="px-6 py-4">$5,000</td>
                <td className="px-6 py-4">
                  <div className="border border-green-500 p-2 rounded-md w-[100px] text-center text-green-500">
                    Successful
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/receive.svg"
                      alt="Receive Icon"
                      width={34}
                      height={34}
                    />
                    Alimi Jamiu
                  </div>
                </th>
                <td className="px-6 py-4">Receive</td>
                <td className="px-6 py-4">23 August 2024</td>
                <td className="px-6 py-4">$1,000</td>
                <td className="px-6 py-4">
                  <div className="border border-yellow-300 p-2 rounded-md w-[100px] text-yellow-300 text-center">
                    Pending
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/send.svg"
                      alt="Send Icon"
                      width={34}
                      height={34}
                    />
                    Habeebah Owojori
                  </div>
                </th>
                <td className="px-6 py-4">Sent</td>
                <td className="px-6 py-4">24 August 2024</td>
                <td className="px-6 py-4">$100,000</td>
                <td className="px-6 py-4">
                  <div className="border border-red-700 p-2 rounded-md w-[100px] text-red-700 text-center">
                    Failed
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/send.svg"
                      alt="Send Icon"
                      width={34}
                      height={34}
                    />
                    Musa Ibrahim
                  </div>
                </th>
                <td className="px-6 py-4">Sent</td>
                <td className="px-6 py-4">25 August 2024</td>
                <td className="px-6 py-4">$10,000</td>
                <td className="px-6 py-4">
                  <div className="border border-green-500 p-2 rounded-md w-[100px] text-green-500 text-center">
                    Successful
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/receive.svg"
                      alt="Receive Icon"
                      width={34}
                      height={34}
                    />
                    Janet Adamu
                  </div>
                </th>
                <td className="px-6 py-4">Receive</td>
                <td className="px-6 py-4">26 August 2024</td>
                <td className="px-6 py-4">$500</td>
                <td className="px-6 py-4">
                  <div className="border border-yellow-300 p-2 rounded-md w-[100px] text-yellow-300 text-center">
                    Pending
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/swap.svg"
                      alt="Exchange Icon"
                      width={34}
                      height={34}
                    />
                    USD - GBP
                  </div>
                </th>
                <td className="px-6 py-4">Exchange</td>
                <td className="px-6 py-4">27 August 2024</td>
                <td className="px-6 py-4">$2,000</td>
                <td className="px-6 py-4">
                  <div className="border border-green-500 p-2 rounded-md w-[100px] text-center text-green-500">
                    Successful
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/send.svg"
                      alt="Send Icon"
                      width={34}
                      height={34}
                    />
                    Amina Yusuf
                  </div>
                </th>
                <td className="px-6 py-4">Sent</td>
                <td className="px-6 py-4">28 August 2024</td>
                <td className="px-6 py-4">$15,000</td>
                <td className="px-6 py-4">
                  <div className="border border-red-700 p-2 rounded-md w-[100px] text-red-700 text-center">
                    Failed
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/receive.svg"
                      alt="Receive Icon"
                      width={34}
                      height={34}
                    />
                    Michael Ogundele
                  </div>
                </th>
                <td className="px-6 py-4">Receive</td>
                <td className="px-6 py-4">29 August 2024</td>
                <td className="px-6 py-4">$750</td>
                <td className="px-6 py-4">
                  <div className="border border-yellow-300 p-2 rounded-md w-[100px] text-yellow-300 text-center">
                    Pending
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/swap.svg"
                      alt="Exchange Icon"
                      width={34}
                      height={34}
                    />
                    USD - CAD
                  </div>
                </th>
                <td className="px-6 py-4">Exchange</td>
                <td className="px-6 py-4">30 August 2024</td>
                <td className="px-6 py-4">$3,000</td>
                <td className="px-6 py-4">
                  <div className="border border-green-500 p-2 rounded-md w-[100px] text-center text-green-500">
                    Successful
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/send.svg"
                      alt="Send Icon"
                      width={34}
                      height={34}
                    />
                    Halima Lawal
                  </div>
                </th>
                <td className="px-6 py-4">Sent</td>
                <td className="px-6 py-4">31 August 2024</td>
                <td className="px-6 py-4">$20,000</td>
                <td className="px-6 py-4">
                  <div className="border border-green-500 p-2 rounded-md w-[100px] text-center text-green-500">
                    Successful
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/receive.svg"
                      alt="Receive Icon"
                      width={34}
                      height={34}
                    />
                    Zainab Musa
                  </div>
                </th>
                <td className="px-6 py-4">Receive</td>
                <td className="px-6 py-4">1 September 2024</td>
                <td className="px-6 py-4">$1,200</td>
                <td className="px-6 py-4">
                  <div className="border border-yellow-300 p-2 rounded-md w-[100px] text-yellow-300 text-center">
                    Pending
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/swap.svg"
                      alt="Exchange Icon"
                      width={34}
                      height={34}
                    />
                    USD - AUD
                  </div>
                </th>
                <td className="px-6 py-4">Exchange</td>
                <td className="px-6 py-4">2 September 2024</td>
                <td className="px-6 py-4">$7,000</td>
                <td className="px-6 py-4">
                  <div className="border border-green-500 p-2 rounded-md w-[100px] text-center text-green-500">
                    Successful
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/send.svg"
                      alt="Send Icon"
                      width={34}
                      height={34}
                    />
                    Aisha Bello
                  </div>
                </th>
                <td className="px-6 py-4">Sent</td>
                <td className="px-6 py-4">3 September 2024</td>
                <td className="px-6 py-4">$25,000</td>
                <td className="px-6 py-4">
                  <div className="border border-red-700 p-2 rounded-md w-[100px] text-red-700 text-center">
                    Failed
                  </div>
                </td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="/receive.svg"
                      alt="Receive Icon"
                      width={34}
                      height={34}
                    />
                    John Doe
                  </div>
                </th>
                <td className="px-6 py-4">Receive</td>
                <td className="px-6 py-4">4 September 2024</td>
                <td className="px-6 py-4">$4,500</td>
                <td className="px-6 py-4">
                  <div className="border border-green-500 p-2 rounded-md w-[100px] text-center text-green-500">
                    Successful
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center my-[20px]">
        <div className="gap-3 flex">
          <button className="bg-[#FFD900] text-center rounded-md text-black  py-[7px] px-[25px]">
            Previous
          </button>

          <button className="bg-[#FFD900] text-center rounded-md text-black  py-[7px] px-[25px]">
            Next
          </button>
        </div>
        <div>
          <h1 className="text-white text-[14px]">Showing 1 out of 1
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
