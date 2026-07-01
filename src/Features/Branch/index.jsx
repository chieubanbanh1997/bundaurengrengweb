import React from "react";
import { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { BRANCH_LIST } from "../../Constants/BranchData";
import Map from "./Map";

export default function Branch() {
  const [selectBranch, setselectBranch] = useState(BRANCH_LIST[0]);

  return (
    <div>
      <Header />
      <div className="sp flex items-center bg-[#fffceb] bg-icon overflow-hidden flex-col md:min-h-[1080px]">
        <div className="container px-8 flex items-center flex-col pb-12">
          <div className="grid grid-cols-5 md:gap-20 gap-0 w-full">
            <div className="md:col-span-2 col-span-5 flex flex-col items-center md:justify-start md:items-end">
              <div className="flex flex-col items-center">
                <h3 className="text-[28px] pb-10 text-center md:text-[32px] lg:text-[48px] font-LHanoienne pt-[40px]">
                  cửa hàng
                </h3>
                {BRANCH_LIST.map((item, index) => {
                  if (selectBranch.id === item.id) {
                    return (
                      <div
                        className="flex justify-center items-center relative mb-7"
                        key={item.id}
                        onClick={() => setselectBranch(item)}
                      >
                        <img
                          src="/images/icons/branch.png"
                          className="cursor-pointer"
                          alt="btn"
                        />
                        <p className="font-LHanoienne text-center items-center flex justify-center absolute cursor-pointer">
                          CN{item.id}: {item.name}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <div
                      className="flex justify-center items-center relative mb-7"
                      key={item.id}
                      onClick={() => setselectBranch(item)}
                    >
                      <p className="font-LHanoienne text-center items-center flex justify-center cursor-pointer">
                        CN{item.id}: {item.name}
                      </p>
                    </div>
                  );
                })}
                <div className="flex justify-center items-center relative mb-7">
                  <p className="font-LHanoienne text-center items-center flex justify-center cursor-pointer">
                    CN2: ???
                  </p>
                </div>
              </div>
            </div>

            <div className="flex md:col-span-3 col-span-5 justify-start items-center mt-12">
              <div className=" border-black rounded-3xl border-[3px] w-[100%] max-w-[700px]">
                <div className="border-[2px] rounded-3xl border-yellow-400 p-5">
                  <Map data={selectBranch} />
                  <h4 className="text-[20px] pb-3 text-left md:text-[28px] font-LHanoienne pt-[10px]">
                    <span className="text-red-700">Reng reng</span>{" "}
                    {selectBranch.name}
                  </h4>
                  <div className="flex gap-3 items-center pb-2 font-Montser">
                    <img src="/images/branch/lo.png" alt="" />
                    <p>{selectBranch.location}</p>
                  </div>
                  <div className="flex gap-3 items-center pb-2 font-Montser">
                    <img src="/images/branch/phone.png" alt="" />
                    <p> {selectBranch.phone}</p>
                  </div>
                  <div className="flex gap-3 items-center pb-2 font-Montser">
                    <img src="/images/branch/time.png" alt="" />
                    <p>{selectBranch.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
