import Add from "@/components/account/add/Add";
import Hero from "@/components/account/hero/Hero";
import Transaction from "@/components/transaction/Transaction";
import React from "react";
const page = () => {
  return (
    <div className="pl-[20%] pt-20">
      <Hero />
      <Add/>
      <Transaction/>
    </div>
  );
};

export default page;
