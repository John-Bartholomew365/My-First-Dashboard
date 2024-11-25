"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Layout() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [notification, setNotification] = useState(false);
  const [menuList, setMenuList] = useState(false);

  const handleMenuList = () => {
    setMenuList(!menuList);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleNotification = () => {
    setNotification(!notification);
  };

  useEffect(() => {
    const closeShowOptions = (e) => {
      if (!e.target.closest(".open")) {
        setMenuList(false);
      }
    };
    document.body.addEventListener("click", closeShowOptions);
    return () => {
      document.body.removeEventListener("click", closeShowOptions);
    };
  }, []);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white dark:bg-black flex items-center justify-between">
        <div className="px-3 py-3 lg:px-16 lg:pl-4 w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center ">
              <div className="mr-16">
                <div className="flex ms-2">
                  <Image src="/purse.svg" alt="Logo" width={136} height={22} />
                </div>
              </div>
              <h1 className="text-[20px] text-white ms-8">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src="/mode.svg"
                  alt="Next.js Logo"
                  width={24}
                  height={24}
                />
              </div>
              <div className="cursor-pointer" onClick={handleMenuList}>
                <Image
                  src="/grid.svg"
                  alt="Next.js Logo"
                  width={24}
                  height={24}
                />

                {menuList && (
                  <div>
                    <div className="absolute bg-[#0f0f0f] rounded-md top-[60px] text-white p-6 w-[340px] right-[15px] shadow-[40px] flex flex-col border-[1px] border-black border-opacity-[20%] h-[550px] overflow-y-scroll">
                      <div className="grid grid-cols-3 items-center justify-center gap-[50px]">
                        <Link href={"https://switch.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/switch.svg"
                              alt="Switch icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Switch</h1>
                          </div>
                        </Link>
                        <Link href={"https://gateway.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/gateway.svg"
                              alt="Gateway icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Gateway</h1>
                          </div>
                        </Link>
                        <Link href={"https://asset.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/asset.svg"
                              alt="Asset icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Asset</h1>
                          </div>
                        </Link>
                        <Link href={"https://wallet.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/wallet.svg"
                              alt="Wallet icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Wallet</h1>
                          </div>
                        </Link>
                        <Link href={"https://exchange.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/exchange.svg"
                              alt="Exchange icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Exchange</h1>
                          </div>
                        </Link>
                        <Link href={"https://purse.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/purse.svg"
                              alt="Purse icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Purse</h1>
                          </div>
                        </Link>
                        <Link href={"https://academy.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/academy.svg"
                              alt="Academy icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Academy</h1>
                          </div>
                        </Link>
                        <Link href={"https://cbdc.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/cbdc.svg"
                              alt="CBDC icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">CBDC</h1>
                          </div>
                        </Link>
                        <Link href={"https://gift.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/gift.svg"
                              alt="Gift icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Gift</h1>
                          </div>
                        </Link>
                        <Link href={"https://voucher.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/voucher.svg"
                              alt="Voucher icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Voucher</h1>
                          </div>
                        </Link>
                        <Link href={"https://merchant.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/merchant.svg"
                              alt="Merchant icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Merchant</h1>
                          </div>
                        </Link>
                        <Link href={"https://lend.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/lend.svg"
                              alt="Lend icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Lend</h1>
                          </div>
                        </Link>
                        <Link href={"https://staking.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/staking.svg"
                              alt="Staking icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Staking</h1>
                          </div>
                        </Link>
                        <Link href={"https://ai.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/ai.svg"
                              alt="AI icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">AI</h1>
                          </div>
                        </Link>
                        <Link href={"https://bot.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/bot.svg"
                              alt="Bot icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Bot</h1>
                          </div>
                        </Link>
                        <Link href={"https://nft.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/nft.svg"
                              alt="NFT icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">NFT</h1>
                          </div>
                        </Link>
                        <Link href={"https://metaverse.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/metaverse.svg"
                              alt="Metaverse icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Metaverse</h1>
                          </div>
                        </Link>
                        <Link href={"https://coin.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/coin.svg"
                              alt="Coin icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Coin</h1>
                          </div>
                        </Link>
                        <Link href={"https://stablecoin.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/stablecoin.svg"
                              alt="Stablecoin icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Stablecoin</h1>
                          </div>
                        </Link>
                        <Link href={"https://save.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/save.svg"
                              alt="Save icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Save</h1>
                          </div>
                        </Link>
                        <Link href={"https://bridge.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/bridge.svg"
                              alt="Bridge icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Bridge</h1>
                          </div>
                        </Link>
                        <Link href={"https://agent.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/agency.svg"
                              alt="Agent icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Agency</h1>
                          </div>
                        </Link>
                        <Link href={"https://remit.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/remit.svg"
                              alt="Remit icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Remit</h1>
                          </div>
                        </Link>
                        <Link href={"https://identity.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/identity.svg"
                              alt="Identity icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Identity</h1>
                          </div>
                        </Link>
                        <Link href={"https://wealth.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/wealth.svg"
                              alt="Wealth icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Wealth</h1>
                          </div>
                        </Link>
                        <Link href={"https://compliance.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/compliance.svg"
                              alt="Compliance icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Compliance</h1>
                          </div>
                        </Link>
                        <Link href={"https://insure.tulupay.com"}>
                          <div className="flex flex-col items-center">
                            <Image
                              className=""
                              src="/menu-list/insure.svg"
                              alt="Compliance icon"
                              width={35}
                              height={35}
                            />
                            <h1 className="font-[600] mt-[10px]">Insure</h1>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="cursor-pointer" onClick={handleNotification}>
                <Image
                  src="/notification.svg"
                  alt="notification"
                  width={24}
                  height={24}
                />

                {notification && (
                  <div className="absolute bg-[#0f0f0f] rounded-md top-[60px] text-white p-6 w-[340px] h-auto right-[15px] shadow-[40px] flex flex-col border-[1px] border-black border-opacity-[20%]">
                    <div className="text-white mb-[25px] flex justify-between">
                      <div>
                        <p className=" text-[20px]">Notification</p>
                      </div>
                      <div className="flex gap-2 items-center ">
                        <MdDelete className="text-red-800" />
                        <p className=" text-[20px]">clear all</p>
                      </div>
                    </div>

                    <div className="border-white border border-b-1 my-[10px]"></div>
                    <div>
                      <div className="flex items-center gap-3">
                        <Image
                          className=""
                          src="/bell.svg"
                          alt="Notification icon"
                          width={20}
                          height={20}
                        />
                        <h1 className="font-bold">New Device Logged In</h1>
                      </div>
                      <div className="ml-8">
                        {" "}
                        <p className="text-[12px] opacity-70 py-[8px]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, animi.
                        </p>
                        <p className="text-[12px] opacity-70">Wed Sep 11</p>
                      </div>
                    </div>
                    <div className="border-white border border-b-1 my-[10px]"></div>
                    <div>
                      <div className="flex items-center gap-3">
                        <Image
                          className=""
                          src="/bell.svg"
                          alt="Notification icon"
                          width={20}
                          height={20}
                        />
                        <h1 className="font-bold">You just opened an order</h1>
                      </div>
                      <div className="ml-8">
                        {" "}
                        <p className="text-[12px] opacity-70 py-[8px]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, animi.
                        </p>
                        <p className="text-[12px] opacity-70">Sat Sep 14</p>
                      </div>
                    </div>
                    <div className="border-white border border-b-1 my-[10px]"></div>
                    <div>
                      <div className="flex items-center gap-3">
                        <Image
                          className=""
                          src="/bell.svg"
                          alt="Notification icon"
                          width={20}
                          height={20}
                        />
                        <h1 className="font-bold">
                          You just received an order
                        </h1>
                      </div>
                      <div className="ml-8">
                        {" "}
                        <p className="text-[12px] opacity-70 py-[8px]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, animi.
                        </p>
                        <p className="text-[12px] opacity-70">Tue Sep 17</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center text-sm p-2 rounded-md bg-[#181818]"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="flex items-center gap-2">
                    <Image src="/david.svg" alt="User" width={25} height={25} />
                    <h1 className="text-[14px] text-white">Davidapiar</h1>
                  </div>
                </button>
                {isDropdownVisible && (
                  <div
                    className="z-50 absolute right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-black dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900 dark:text-white">
                        David Adebayo
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                        Davidadebayo@hapiarbliz.com
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <Link href="/dashboard/settings">
                          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                            <Image
                              src="/profile.svg"
                              alt="Profile"
                              width={20}
                              height={20}
                            />
                            <span className="ms-3">Profile</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dashboard/statement">
                          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                            <Image
                              src="/statement.svg"
                              alt="Statement"
                              width={20}
                              height={20}
                            />
                            <span className="ms-3">Statement and report</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dashboard/compliance">
                          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                            <Image
                              src="/compliance.svg"
                              alt="Contact"
                              width={20}
                              height={20}
                            />
                            <span className="ms-3">Compliance</span>
                          </div>
                        </Link>
                        <Link href="/dashboard/contact">
                          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                            <Image
                              src="/contact.svg"
                              alt="Contact"
                              width={20}
                              height={20}
                            />
                            <span className="ms-3">Contact</span>
                          </div>
                        </Link>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="block text-center px-4 py-2 text-sm text-[#FF4040] hover:bg-gray-100 dark:hover:bg-[#181818]"
                        >
                          Log out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-black dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-black">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/dashboard">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                  <Image
                    src="/dashboard.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                  />
                  <span className="ms-3">Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/account">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818]">
                  <Image
                    src="/accounts.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Accounts
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/card">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                  <Image
                    src="/card.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">Cards</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/transaction">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                  <Image
                    src="/transaction.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Transaction
                  </span>
                </div>
              </Link>
            </li>
            <div className="py-[50px]">
              <span className="flex-1 ms-3 whitespace-nowrap text-white opacity-50">
                ACCOUNT
              </span>
            </div>
            <li>
              <Link href="/dashboard/settings">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                  <Image
                    src="/settings.svg"
                    alt="Next.js Logo"
                    width={20}
                    height={20}
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="mt-[80px]">
            <Image
              src="/powered-by-tulupay.svg"
              alt="Next.js Logo"
              width={139}
              height={35}
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
