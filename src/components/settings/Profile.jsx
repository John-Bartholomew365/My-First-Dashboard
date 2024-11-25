"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaGlobe,
  FaLock,
  FaMapPin,
  FaMobileAlt,
  FaUserAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const [isEnabled, setIsEnabled] = useState(true);
  const [IsDisabled, setIsDisabled] = useState(true);

  // Handler function to toggle the button state
  const handleChange = () => {
    setIsDisabled(!IsDisabled);
  };

  const handleClick = () => {
    setIsEnabled(!isEnabled);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <div className="">
            <div className="mt-16 px-5 mx-5 bg-[#0F0F0F] h-auto rounded-md border border-gray-600">
              <div className="p-6">
                <h1 className="text-[20px]">Profile</h1>
                <div className="my-[20px]">
                  <h2>Personal Information</h2>
                </div>
                <div className="flex items-center gap-[50px] w-full">
                  <div>
                    <h1>First name</h1>
                    <div>
                      <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                        <div className="flex gap-2 items-center">
                          <FaUserAlt />
                          <input
                            type="text"
                            placeholder="First name"
                            className=" bg-[#181818] text-[14px] w-[70px] outline-none "
                          />
                        </div>
                        <div>
                          <FaLock />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Last name</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <FaUserAlt />
                        <input
                          type="text"
                          placeholder="Last name"
                          className=" bg-[#181818] text-[14px] w-[70px] outline-none "
                        />
                      </div>
                      <div>
                        <FaLock />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[20px]">
                  <h2>Contact Information</h2>
                </div>
                <div className="flex items-center gap-[50px] w-full">
                  <div>
                    <h1>Email</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <MdEmail />
                        <input
                          type="text"
                          placeholder="Davidapiar@outlook.com"
                          className=" bg-[#181818] text-[14px] w-[170px] outline-none "
                        />
                      </div>
                      <div>
                        <FaLock />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Phone Number</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <FaMobileAlt />
                        <input
                          type="text"
                          placeholder="Tel number"
                          className=" bg-[#181818] text-[14px] w-[70px] outline-none "
                        />
                      </div>
                      <div>
                        <FaLock />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[50px] w-full mt-[16px]">
                  <div>
                    <h1>Country</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <FaGlobe />
                        <input
                          type="text"
                          placeholder="Kenya"
                          className=" bg-[#181818] text-[14px] w-[170px] outline-none "
                        />
                      </div>
                      <div>
                        <FaChevronDown />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Address</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <FaMapPin />
                        <input
                          type="text"
                          placeholder="Street address"
                          className=" bg-[#181818] text-[14px] w-[100px] outline-none "
                        />
                      </div>
                      <div>
                        <FaLock />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-16 px-5 mx-5 bg-[#0F0F0F] h-auto rounded-md border border-gray-600">
              <div className="p-6">
                <h1 className="text-[20px]">Next of kin profile</h1>
                <div className="my-[20px]">
                  <h2>Next of kin Information</h2>
                </div>
                <div className="flex items-center gap-[50px] w-full">
                  <div>
                    <h1>First name</h1>
                    <div>
                      <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                        <div className="flex gap-2 items-center">
                          <FaUserAlt />
                          <input
                            type="text"
                            placeholder="First name"
                            className=" bg-[#181818] text-[14px] w-[70px] outline-none "
                          />
                        </div>
                        <div>
                          <FaLock />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Last name</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <FaUserAlt />
                        <input
                          type="text"
                          placeholder="Last name"
                          className=" bg-[#181818] text-[14px] w-[70px] outline-none "
                        />
                      </div>
                      <div>
                        <FaLock />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-[20px]">
                  <h2>Contact Information</h2>
                </div>
                <div className="flex items-center gap-[50px] w-full">
                  <div>
                    <h1>Email</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <MdEmail />
                        <input
                          type="text"
                          placeholder="Davidapiar@outlook.com"
                          className=" bg-[#181818] text-[14px] w-[170px] outline-none "
                        />
                      </div>
                      <div>
                        <FaLock />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Phone Number</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <FaMobileAlt />
                        <input
                          type="text"
                          placeholder="Tel number"
                          className=" bg-[#181818] text-[14px] w-[70px] outline-none "
                        />
                      </div>
                      <div>
                        <FaLock />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[50px] w-full mt-[16px]">
                  <div>
                    <h1>Country</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <FaGlobe />
                        <input
                          type="text"
                          placeholder="Nigeria"
                          className=" bg-[#181818] text-[14px] w-[170px] outline-none "
                        />
                      </div>
                      <div>
                        <FaChevronDown />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1>Address</h1>
                    <div className="flex items-center justify-between rounded-md py-[16px] w-[380px] px-[16px] bg-[#181818] gap-2">
                      <div className="flex gap-2 items-center">
                        <FaMapPin />
                        <input
                          type="text"
                          placeholder="Street address"
                          className=" bg-[#181818] text-[14px] w-[100px] outline-none "
                        />
                      </div>
                      <div>
                        <FaLock />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-8">
              <h1 className="font-[600] text-[24px]">Created Date</h1>
              <p className="text-[14px] py-[10px]">
                23 may, 2023 04:00PM WAT GMT+1
              </p>
            </div>
          </div>
        );

      case "Security":
        return (
          <div className="">
            <div className="mt-16 px-5 mx-5 bg-[#181818] h-auto rounded-md border border-gray-600">
              <div className="p-6">
                <h1 className="text-[20px]">Security</h1>
                <div className="my-[20px]">
                  <h2 className="opacity-70">Password Management</h2>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/2fa.svg"
                        alt="2 FA Verification"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">
                        2 Step authentication
                      </h2>
                      <p className="text-[14px] opacity-70">
                        Enable 2FA to protect your account from internal or
                        external threat to your account.
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleClick}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>

                <div className="flex items-center my-[40px] justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/email.svg"
                        alt="Email Verification"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">
                        Email Verification
                      </h2>
                      <p className="text-[14px] opacity-70">
                        Ask for email verification when logging in to my account
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleChange}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>
                <div className="flex items-center my-[30px] justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/sms.svg"
                        alt="SMS Verification"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">
                        SMS Verification
                      </h2>
                      <p className="text-[14px] opacity-70">
                        Ask for SMS Verification when logging into my account
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleChange}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>

                <div className="my-[50px]">
                  <h1 className="opacity-70 text-[16px] ">
                    Password information
                  </h1>
                </div>
                <div className="flex items-center my-[30px] justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/password.svg"
                        alt="Change password"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">
                        Change password
                      </h2>
                      <p className="text-[14px] opacity-70">
                        Reset your password to protect your account
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleChange}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>
                <div className="flex items-center my-[30px] justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/pin.svg"
                        alt="Change pin"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">
                        Change transaction pin
                      </h2>
                      <p className="text-[14px] opacity-70">
                        Reset your transaction PIN to enhance the security of
                        your account.
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleChange}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Notification":
        return (
          <div className="">
            <div className="mt-16 px-5 mx-5 bg-[#181818] h-auto rounded-md border border-gray-600">
              <div className="p-6">
                <h1 className="text-[20px]">Notification</h1>
                <div className="my-[20px]">
                  <h2 className="opacity-70">Preference</h2>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/2fa.svg"
                        alt="2 FA Verification"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">
                        Security alert
                      </h2>
                      <p className="text-[14px] opacity-70">
                        Protect your account from internal or external threat to
                        your account.
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleClick}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>

                <div className="flex items-center my-[40px] justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/verify-sms.svg"
                        alt="SMS Verification"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">
                        SMS notification
                      </h2>
                      <p className="text-[14px] opacity-70">
                        Stay informed about account activities by enabling
                        SMS notifications.
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleChange}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>
                <div className="flex items-center my-[30px] justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/alert.svg"
                        alt="Price Alert"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">Price alert</h2>
                      <p className="text-[14px] opacity-70">
                        Stay informed about recent changes in the market
                        exchange rate
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleChange}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Devices":
        return (
          <div className="">
            <div className="mt-16 px-5 mx-5 bg-[#181818] h-auto rounded-md border border-gray-600">
              <div className="p-6">
                <h1 className="text-[20px]">Devices</h1>
                <div className="my-[20px]">
                  <h2 className="opacity-70">Mobile phone</h2>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/mobile-phones.svg"
                        alt="Your phone"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">Xiaomi 234</h2>
                      <p className="text-[14px] opacity-70">Active</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleClick}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>

                <div className="flex items-center my-[40px] justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/mobile-phones.svg"
                        alt="Your phone"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">iPhone xmas</h2>
                      <p className="text-[14px] opacity-70">2 days ago</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleChange}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>
                <div className="flex items-center my-[30px] justify-between">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        src="/mobile-phones.svg"
                        alt="Your Phone"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-[600] ">Android 4579</h2>
                      <p className="text-[14px] opacity-70">4 months ago</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleChange}
                      className={`px-7 py-2 rounded-md ${
                        isEnabled
                          ? "bg-[#FFD900] text-black"
                          : "bg-[#0F0F0F] text-white"
                      }`}
                    >
                      {isEnabled ? "Enable" : "Disable"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Compliance":
        return (
          <div className="">
            <div className="mt-16 px-5 mx-5 bg-[#181818] h-auto rounded-md border border-gray-600">
              <div className="p-6">
                <h1 className="text-[20px]">
                  Status: <span className="text-[#FFD900]">Pending</span>
                </h1>
                <div className=""></div>
                <div className="my-[20px]">
                  <h2 className="opacity-70">Mobile phone</h2>
                </div>
                <div className="flex items-center gap-[250px]">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <p className="opacity-70 text-[14px]">Legal first name</p>
                      <h1 className="text-[20px] font-[600]">David</h1>
                    </div>
                  </div>
                  <div>
                    <p className="opacity-70 text-[14px]">Legal last name</p>
                    <h1 className="text-[20px] font-[600]">Adebayo</h1>
                  </div>
                </div>
                <div className="flex items-center gap-[300px] my-[30px]">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <p className="opacity-70 text-[14px]">Gender</p>
                      <h1 className="text-[20px] font-[600]">Male</h1>
                    </div>
                  </div>
                  <div>
                    <p className="opacity-70 text-[14px]">Date of birth</p>
                    <h1 className="text-[20px] font-[600]">18/05/1984</h1>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="">
                    <p className="opacity-70 text-[14px]">Address</p>
                    <h1 className="text-[18px] font-[600]">
                      8a, Stadium road, opposite circular hotel, irewolede road.
                      Ilorin, Kwara
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-[225px] my-[30px]">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <p className="opacity-70 text-[14px]">Phone number</p>
                      <h1 className="text-[20px] font-[600]">08123456789</h1>
                    </div>
                  </div>
                  <div>
                    <p className="opacity-70 text-[14px]">BVN</p>
                    <h1 className="text-[20px] font-[600]">02876498273</h1>
                  </div>
                </div>

                <div className="flex items-center gap-[245px] my-[30px]">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <p className="opacity-70 text-[14px]">Country of issue</p>
                      <h1 className="text-[20px] font-[600]">Nigeria</h1>
                    </div>
                  </div>
                  <div>
                    <p className="opacity-70 text-[14px]">State / Province</p>
                    <h1 className="text-[20px] font-[600]">18/05/1984</h1>
                  </div>
                </div>

                <div className="flex items-center gap-[205px] my-[30px]">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <p className="opacity-70 text-[14px]">
                        Means of identification
                      </p>
                      <h1 className="text-[20px] font-[600]">NIN</h1>
                    </div>
                  </div>
                  <div>
                    <p className="opacity-70 text-[14px]">
                      Identification number
                    </p>
                    <h1 className="text-[20px] font-[600]">02876498273</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      <div className=" p-5 mx-5">
        <ul className="flex gap-10 border-b border-gray-800">
          {["Profile", "Security", "Notification", "Devices", "Compliance"].map(
            (tab) => (
              <li
                key={tab}
                className={`p-4 cursor-pointer ${
                  activeTab === tab
                    ? "border-b-2 border-[#FFD900] text-[#FFD900]"
                    : "text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="p-8">{renderContent()}</div>
      <div className="flex justify-end mx-8 mt-4">
        <button className="bg-[#FFD900] text-black px-7 text-[14px] py-2 rounded-md">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
