"use client";

import Modal from "@/components/Modal";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isBankTransferModalOpen, setIsBankTransferModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isCardModalOpen2, setIsCardModalOpen2] = useState(false);
  const [amount, setAmount] = useState(100);
  const [currentSection, setCurrentSection] = useState("amount");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isChecked, setIsChecked] = useState(false);
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2  = () => {
    setIsModalOpen2(false);
  };
  const openModal4 = () => {
    setIsModalOpen2(true);
  };

  const closeModal4  = () => {
    setIsModalOpen2(false);
  };

  const closeModalAndNavigate = () => {
    setIsModalOpen(false);
    window.location.href = '/dashboard/account'; // Alternative navigation method
  };

  const openBankTransferModal = () => {
    setIsBankTransferModalOpen(true);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Move to the next input box automatically
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    // alert(`OTP entered: ${otp.join("")}`);
  };

  const closeBankTransferModal = () => {
    setIsBankTransferModalOpen(false);
  };

  const openCardModal = () => {
    setIsCardModalOpen(true);
  };
  const openCardModal2 = () => {
    setIsCardModalOpen(true);
  };

  const handleNextClick = () => {
    if (currentSection === "amount") {
      setCurrentSection("cardDetails");
    } else {
      setCurrentSection("verifyOtp");
    }
  };

  const closeCardModal = () => {
    setIsCardModalOpen(false);
  };

  return (
    <div className="mt-[30px]">
      <div className="flex gap-[40px] items-center justify-center">
        <div
          className="border border-gray-400 rounded-md h-[67px] pb-[2px] w-[220px] cursor-pointer"
          onClick={openModal}
        >
          <div className="flex items-center justify-center p-2 m-auto w-full">
            <Image src="/plus.svg" alt="plus Icon" width={18} height={18} />
          </div>
          <div className="bg-[#181818] text-center w-full h-[4.7vh]">
            Add money
          </div>
        </div>

        <div className="border border-gray-400 rounded-md h-[67px] pb-[2px] w-[220px] cursor-pointer" onClick={openModal2}>
          <div className="flex items-center justify-center p-2 m-auto w-full">
            <Image src="/plus.svg" alt="plus Icon" width={18} height={18} />
          </div>
          <div className="bg-[#181818] text-center w-full h-[4.7vh]">
            Send money
          </div>
        </div>

        <div onClick={openModal4} className="border border-gray-400 rounded-md h-[67px] pb-[2px] w-[220px] cursor-pointer">
          <div className="flex items-center justify-center p-2 m-auto w-full">
            <Image src="/plus.svg" alt="plus Icon" width={18} height={18} />
          </div>
          <div className="bg-[#181818] text-center w-full h-[4.7vh]">
            Exchange money
          </div>
        </div>
        <Modal show={isModalOpen4} onClose={closeModal4}>
          <div className=" h-[108px] flex justify-between p-3 rounded-md">
            <div>
              <h1 className="text-[24px] font-bold">Add new account</h1>
              <p className="opacity-70">Add a currency account of your choice</p>
            </div>
            <div onClick={closeModal4} className="cursor-pointer text-lg">
              &times;
            </div>
          </div>
          <div className="bg-black rounded-md">
            <div className="bg-black p-2 my-3 rounded-[20px]">
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
          <div className="bg-[#FFD900] p-2 rounded-md flex text-black items-center justify-center w-[200px] m-auto">
            <button onClick={closeModal4}>Add currency</button>
          </div>
        </Modal>
      </div>




      

      {/* Main Modal Component */}
      {isModalOpen && (
        <Modal show={isModalOpen} onClose={closeModal}>
          <div className="p-3 rounded-md">
            <div className="flex justify-between items-center py-3">
              <h1 className="text-[24px] font-bold">Method of adding money</h1>
              <button
                className="text-xl font-bold text-white"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>

            <div
              className="border border-white border-opacity-50 p-3 cursor-pointer rounded-[20px] my-3"
              onClick={openBankTransferModal}
            >
              <h1 className="text-[20px] font-bold">Bank transfer</h1>
              <p className="text-[14px] opacity-70 pt-2">
                Easily top up your account with bank transfers in just a few
                simple steps
              </p>
            </div>

            <div
              className="border border-white border-opacity-50 cursor-pointer p-3 rounded-[20px] my-5"
              onClick={openCardModal}
            >
              <h1 className="text-[20px] font-bold">Credit/Debit card</h1>
              <p className="text-[14px] opacity-70 pt-2">
                Add money to your account using your debit or credit card with
                just a few steps
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* Bank Transfer Modal */}
      {isBankTransferModalOpen && (
        <Modal show={isBankTransferModalOpen} onClose={closeBankTransferModal}>
          <div className="rounded-md">
            <div className="flex justify-between items-center rounded-md h-[76px] px-2 bg-cover bg-center bg-[url('/modal-bg.svg')]">
              <h1 className="text-[24px] font-bold">Bank Transfer</h1>
              <button
                className="text-xl font-bold text-white"
                onClick={closeBankTransferModal}
              >
                &times;
              </button>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] opacity-70 pt-2">Account name</p>
              <p className="text-[14px] opacity-70 pt-2">David Adebayo</p>
            </div>

            <div className="flex justify-between py-3">
              <p className="text-[14px] opacity-70 pt-2">Account number</p>
              <p className="text-[14px] opacity-70 pt-2">3194649372</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] opacity-70 pt-2">Bank name</p>
              <p className="text-[14px] opacity-70 pt-2">Capital One Bank</p>
            </div>
            <div className="flex gap-1 items-center p-2 rounded-md justify-center my-5 bg-black">
              <Image
                src="/pentagon.svg"
                alt="usd Icon"
                width={16}
                height={16}
              />
              <p className="text-[13px] opacity-50">
                This account can only receive funds in United State Dollar (USD)
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* Credit/Debit Card Full-Screen Modal */}
      {isCardModalOpen && (
        <Modal show={isCardModalOpen} onClose={closeCardModal}>
          <div
            className="fixed inset-0 bg-[#181818] p-[60px] flex flex-col z-50"
            style={{ height: "100vh" }}
          >
            <div className="flex justify-start items-start">
              <h1 className="font-bold text-[24px]">
                {currentSection === "amount" ? "Add money" : "Card details"}
              </h1>
            </div>
            <div className="w-full mx-auto p-6">
              <div className="flex gap-[100px] justify-center items-start">
                <div>
                  {/* Steps */}
                  <div className="flex gap-3 items-start">
                    <div className="flex flex-col gap-4 items-center">
                      <Image
                        src="/add-amount.svg"
                        alt="Amount Icon"
                        width={40}
                        height={40}
                      />
                      <div className="rotate-90 text-2xl font-bold">-----</div>
                    </div>
                    <div className="pt-[10px]">
                      <h1>Amount to add</h1>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start my-[20px]">
                    <div className="flex flex-col gap-4 items-center">
                      <Image
                        src="/card-details.svg"
                        alt="Card Details Icon"
                        width={40}
                        height={40}
                      />
                      <div className="rotate-90 text-2xl font-bold">-----</div>
                    </div>
                    <div className="pt-[10px]">
                      <h1>Card Details</h1>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex flex-col gap-4 items-center">
                      <Image
                        src="/verify-otp.svg"
                        alt="Verify OTP Icon"
                        width={40}
                        height={40}
                      />
                      {/* <div className="rotate-90 text-2xl font-bold">-----</div> */}
                    </div>
                    <div className="pt-[10px]">
                      <h1>Verify OTP</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col justify-center bg-[#0F0F0F] w-[800px] h-auto px-4 py-8 rounded-md">
                    {currentSection === "amount" ? (
                      <h1 className="text-[72px] text-center font-bold text-white">
                        ${amount}
                      </h1>
                    ) : currentSection === "cardDetails" ? (
                      <div className="flex items-start flex-col">
                        {/* Card Details Section */}
                        <div className="w-full px-[30px]">
                          <p className="mb-[10px]">Card number</p>
                          <label className="w-full" htmlFor="email"></label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email / Phone number / ID"
                            className="mt-1 p-2 w-full border border-gray-400 bg-[#0F0F0F] rounded-md text-white"
                          />
                        </div>
                        <div className="flex justify-center gap-[100px] items-center px-[30px] mt-[30px]">
                          <div className="w-full">
                            <p className="mb-[10px]">Expire date (optional)</p>
                            <label className="w-full" htmlFor="email"></label>
                            <input
                              type="text"
                              id=""
                              name=""
                              placeholder="MM/YY"
                              className="mt-1 p-2 w-full border border-gray-400 bg-[#0F0F0F] rounded-md text-white"
                            />
                          </div>
                          <div className="w-full">
                            <p className="mb-[10px]">CVV/CVC (optional)</p>
                            <label className="w-full" htmlFor="email"></label>
                            <input
                              type="text"
                              id=""
                              name=""
                              placeholder="***"
                              className="mt-1 p-2 border border-gray-400 bg-[#0F0F0F] rounded-md text-white"
                            />
                          </div>
                        </div>

                        <div className="flex items-center px-[30px] my-[20px]">
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-2 h-4 w-4 text-[#FFD900]  rounded focus:ring-[#FFD900]"
                          />
                          <label
                            htmlFor="myCheckbox"
                            className="text-[#FFD900] text-[13px]"
                          >
                            {isChecked
                              ? "Save as beneficiary (Optional)"
                              : "Save as beneficiary (Optional)"}
                          </label>
                        </div>

                        <div className="flex flex-col items-center justify-center m-auto my-[20px]">
                          <h1>We accept these cards</h1>
                          <div className="mt-[10px]">
                            <Image
                              src="/cards.svg"
                              alt="Cards we accept"
                              width={203}
                              height={40}
                            />
                          </div>

                          <div className="flex gap-1 mx-[30px] m-auto w-[700px] items-center p-2 rounded-md justify-center mt-4 bg-[#181818]">
                            <Image
                              src="/pentagon.svg"
                              alt="usd Icon"
                              width={16}
                              height={16}
                            />
                            <p className="text-[13px] opacity-50">
                              Input valid card details that hold United States
                              Dollars(USD).
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : currentSection === "verifyOtp" ? (
                      <div>
                        <div className="bg-cover bg-center bg-[url('/verify-otp-bg.svg')] h-[200px] rounded-md p-3 flex items-start flex-col">
                          {/* Third Section */}
                          <div className="w-full px-[30px]">
                            <p className="text-center opacity-70">
                              Amount to top-up
                            </p>

                            <div className="text-center border-b border-b-gray-400 ">
                              <h1 className="text-[56px]">
                                $500.00{" "}
                                <span className="text-[28px] font-semibold">
                                  USD
                                </span>
                              </h1>
                            </div>
                            <div className="my-[20px] flex items-center gap-3 justify-center ">
                              <Image
                                src="/red.svg"
                                alt=""
                                width={32}
                                height={32}
                              />

                              <p>5427 **** **** * 254</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-[10px]">
                          <h1 className="text-center text-[14px]">
                            Your bank has sent you an OTP. Check your inbox for
                            the code.
                          </h1>
                        </div>

                        <div className="flex flex-col items-center justify-center ">
                          <div className=" p-8 rounded-lg">
                            <div className="flex space-x-2 ">
                              {otp.map((data, index) => (
                                <input
                                  key={index}
                                  type="text"
                                  name="otp"
                                  maxLength="1"
                                  className="w-12 bg-[#181818] h-12 text-center text-xl rounded-lg "
                                  value={data}
                                  onChange={(e) =>
                                    handleChange(e.target, index)
                                  }
                                  onFocus={(e) => e.target.select()}
                                />
                              ))}
                            </div>
                            <div className="my-[20px]">
                              <h1 className="text-[16px]">
                                Didn&apos;t receive the code?{" "}
                                <span className="text-[13px] text-[#FFD900]">
                                  Resend me code in 0:53 s
                                </span>
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          {/* <button
                            onClick={handleSubmit}
                            className="mt-2 bg-[#FFD900] text-black px-6 py-2 rounded-lg"
                          >
                            Confirm OTP
                          </button> */}

                          <button
                            onClick={() => {
                              // Create a div element for the modal
                              const modal = document.createElement("div");
                              modal.className =
                                "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";
                              modal.innerHTML = `
      <div class="w-full h-[100vh] mx-auto bg-black p-8 rounded-lg flex flex-col items-center justify-center shadow-lg">
      <div> <Image
                        src="/success.svg"
                        alt="Success"
                        width={200}
                        height={200}
                      /></div>
        <h2 class="text-[35px] font-bold my-4 ">Success</h2>
        <p>You&apos;ve successfully sent $500 to David Adebayo</p>
         <Link href="/dashboard/account">
        <button class="mt-20 bg-[#FFD900] text-black px-4 py-2 rounded-lg">
          Go to account
        </button>
        </Link>
      </div>
    `;

                              // Append the modal to the body
                              document.body.appendChild(modal);

                              // Add click event to close the modal
                              modal
                                .querySelector("button")
                                .addEventListener("click", () => {
                                  document.body.removeChild(modal);
                                });
                            }}
                            className="mt-2 bg-[#FFD900] text-black px-6 py-2 rounded-lg"
                          >
                            Confirm OTP
                          </button>

<div>
      {/* <button
        onClick={handleSubmit}
        className="mt-2 bg-[#FFD900] text-black px-6 py-2 rounded-lg"
      >
        Confirm OTP
      </button> */}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full h-[100vh] mx-auto bg-black p-8 rounded-lg flex flex-col items-center justify-center shadow-lg">
            <Image
              src="/success.svg"
              alt="Success"
              width={150}
              height={150}
            />
            <h2 className="text-[35px] font-bold my-4 text-white">Success</h2>
            <p className="text-white opacity-70">
              You&apos;ve successfully sent $500 to David Adebayo
            </p>
            <button href={"/dashboard/account"}
              onClick={closeModalAndNavigate}
              className="mt-20 bg-[#FFD900] text-black px-4 py-2 rounded-lg"
            >
              Go to account
            </button>
          </div>
        </div>
      )}
    </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Navigation Buttons */}
                    {currentSection === "amount" && (
                      <div className="mt-[20px] items-center justify-center flex gap-[10px]">
                        <button
                          onClick={() => setAmount(100)}
                          className={`p-2 w-[100px] flex items-center justify-center h-[32px] rounded-md ${
                            amount === 100
                              ? "bg-[#FFD900] text-black"
                              : "bg-[#181818] text-white border border-white border-opacity-50"
                          }`}
                        >
                          $100
                        </button>
                        <button
                          onClick={() => setAmount(200)}
                          className={`p-2 w-[100px] flex items-center justify-center h-[32px] rounded-md ${
                            amount === 200
                              ? "bg-[#FFD900] text-black"
                              : "bg-[#181818] text-white border border-white border-opacity-50"
                          }`}
                        >
                          $200
                        </button>
                        <button
                          onClick={() => setAmount(300)}
                          className={`p-2 w-[100px] flex items-center justify-center h-[32px] rounded-md ${
                            amount === 300
                              ? "bg-[#FFD900] text-black"
                              : "bg-[#181818] text-white border border-white border-opacity-50"
                          }`}
                        >
                          $300
                        </button>
                        <button
                          onClick={() => setAmount(400)}
                          className={`p-2 w-[100px] flex items-center justify-center h-[32px] rounded-md ${
                            amount === 400
                              ? "bg-[#FFD900] text-black"
                              : "bg-[#181818] text-white border border-white border-opacity-50"
                          }`}
                        >
                          $400
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between mt-[30px]">
                    <button 
                      className="bg-[#000000] p-2 w-[100px] flex items-center justify-center h-[32px] text-white rounded-md"
                      onClick={() => setCurrentSection("amount")}
                    >
                      Back
                    </button>
                    <button
                      className="bg-[#FFD900] p-2 w-[100px] flex items-center justify-center h-[32px] text-black rounded-md"
                      onClick={handleNextClick}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

{isModalOpen2 && (
        <Modal show={isModalOpen2} onClose={closeModal2}>

          {/* Method of sending money */}
          
          <div className="p-3 rounded-md">
            <div className="flex justify-between items-center py-3">
              <h1 className="text-[24px] font-bold">Methods of sending money</h1>
              <button
                className="text-xl font-bold text-white"
                onClick={closeModal2}
              >
                &times;
              </button>
            </div>

            <div
              className="border border-gray-400 border-opacity-50 p-3 cursor-pointer rounded-[20px] my-3"
              onClick={openCardModal2}
            >
              <h1 className="text-[20px] font-bold">Send to Tulu Purse user</h1>
              <p className="text-[14px] opacity-70 pt-2">
                Smoothly transfer funds within the Tulu Purse. Send money to other Tulu Purse owners with easy transactions flow.
              </p>
            </div>

            <div
              className="border border-gray-400 border-opacity-50 cursor-pointer p-3 rounded-[20px] my-5"
              // onClick={openCardModal21}
            >
              <h1 className="text-[20px] font-bold">Send to Tulupay user</h1>
              <p className="text-[14px] opacity-70 pt-2">
                Instantly transfer funds to Tulupay users. Follow easy steps for a smooth, hassle-free transaction process.
              </p>
            </div>

            <div
              className="border border-gray-400 border-opacity-50 cursor-pointer p-3 rounded-[20px] my-5"
              // onClick={openCardModal21}
            >
              <h1 className="text-[20px] font-bold">Send to a bank account</h1>
              <p className="text-[14px] opacity-70 pt-2">
                Quickly transfer funds to any bank account with just a few steps for a secure and efficient payment process.
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>

    
  );
};

export default Add;
