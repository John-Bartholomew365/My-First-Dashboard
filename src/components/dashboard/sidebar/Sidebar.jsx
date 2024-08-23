"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Layout() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      {/* Navbar */}
      {/* <nav className="fixed top-0 z-50 w-full bg-white dark:bg-black flex items-center justify-between">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
          <div className="flex">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <Image
                  className=""
                  src="./purse.svg"
                  alt="Next.js Logo"
                  width={136}
                  height={22}
                />
              </a>
            </div>
            <div className="flex items-center gap-40 justify-center">
              <div>
                <h1 className="text-[20px] text-white">Dashboard</h1>
              </div>
              <div className="flex items-center ms-auto gap-4">
                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex items-center text-sm p-2 0 rounded-md bg-[#181818]"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="flex items-center gap-2">
                      <Image
                        src="./david.svg"
                        alt="Next.js Logo"
                        width={25}
                        height={25}
                      />
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
                          <Link href="#">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                              <Image
                                src="./profile.svg"
                                alt="Next.js Logo"
                                width={20}
                                height={20}
                              />
                              <span className="ms-3">Profile</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                              <Image
                                src="./statement.svg"
                                alt="Next.js Logo"
                                width={20}
                                height={20}
                              />
                              <span className="ms-3">Statement and report</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] group">
                              <Image
                                src="./contact.svg"
                                alt="Next.js Logo"
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
        </div>
      </nav> */}
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
              <div>
                <Image
                  src="/grid.svg"
                  alt="Next.js Logo"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <Image
                  src="/notification.svg"
                  alt="Next.js Logo"
                  width={24}
                  height={24}
                />
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center text-sm p-2 rounded-md bg-[#181818]"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/david.svg"
                      alt="User"
                      width={25}
                      height={25}
                    />
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
                        <Link href="#">
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
                        <Link href="#">
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
                        <Link href="#">
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
              <Link href="#">
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
              <Link href="#">
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
              <Link href="#">
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
              <Link href="#">
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
