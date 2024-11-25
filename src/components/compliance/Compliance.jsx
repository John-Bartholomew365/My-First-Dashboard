import React from "react";

const Compliance = () => {
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
              <p className="opacity-70 text-[14px]">Identification number</p>
              <h1 className="text-[20px] font-[600]">02876498273</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
