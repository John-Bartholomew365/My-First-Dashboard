import Image from 'next/image'
import React from 'react'

const Transaction = () => {
  return (
    <div className='my-[30px]'>
        <h1 className='text-[20px] font-bold py-[15px]'>Recent Transactions</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-[gray-700 ]uppercase bg-gray-50 my-3 dark:bg-[#181818] dark:text-gray-400">
          <tr className="my-3">
            <th scope="col" class="px-6 py-3">
              Transaction details
            </th>
            <th scope="col" class="px-6 py-3">
              Type
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#0F0F0F]">
          <tr class=" border-b   dark:border-gray-700 ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
            <td class="px-6 py-4">Exchange</td>
            <td class="px-6 py-4">23 August 2024</td>
            <td class="px-6 py-4">$5,000</td>
            <td class="px-6 py-4">
              <div className="border border-green-500 p-2 rounded-md w-[100px] text-center text-green-500">
                Successful
              </div>
            </td>
            {/* <td class="px-6 py-4 text-right">
              
            </td> */}
          </tr>
          <tr class=" border-b  dark:border-gray-700  ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/receive.svg"
                  alt="Exchange Icon"
                  width={34}
                  height={34}
                />
                Alimi Jamiu
              </div>
            </th>
            <td class="px-6 py-4">Receive</td>
            <td class="px-6 py-4">23 Augsut 2024</td>
            <td class="px-6 py-4">$1,000</td>
            <td class="px-6 py-4">
              <div className="border border-yellow-300 p-2 rounded-md w-[100px] text-yellow-300 text-center">
                Pending
              </div>
            </td>
            {/* <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td> */}
          </tr>
          <tr class="">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/send.svg"
                  alt="Exchange Icon"
                  width={34}
                  height={34}
                />
                Habeebah Owojori
              </div>
            </th>
            <td class="px-6 py-4">Sent</td>
            <td class="px-6 py-4">24 August 2024</td>
            <td class="px-6 py-4">$100,000</td>
            <td class="px-6 py-4">
              <div className="border border-red-700 p-2 rounded-md w-[100px] text-red-700 text-center">
                Failed
              </div>
            </td>
            {/* <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Transaction