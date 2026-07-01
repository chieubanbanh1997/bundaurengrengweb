import React from "react";

import { LIST_SUB_FOODS } from "../../../../Constants/SubFoodData";

export default function SubMenu() {
  return (
    <div className="container px-8 flex flex-col pb-[60px]">
      <h4 className="font-LHanoienne text-[#D00000] text-[24px]">Món ăn Kèm</h4>
      <div className="grid grid-cols-6 gap-10 mt-5">
        {LIST_SUB_FOODS.map((item, index) => {
          return (
            <div
              className="border-[3px] border-black p-[1px] rounded-[10%] hover:bg-[#FDDE45] col-span-6 md:col-span-3 lg:col-span-2 group"
              key={index}
            >
              <div className="border-[2px] border-[#FDDE45] rounded-[10%] overflow-hidden h-[100%] relative">
                <img
                  src={`${item.thumbnail}`}
                  alt={item.title}
                  className="w-full cursor-pointer hover:scale-[1.05] ease-linear duration-[0.5s] transition-all"
                />
                <h4 className="font-LHanoienne uppercase px-[30px] pt-[15px] pb-[10px] text-[18px] md:text-[24px] font-bold cursor-pointer group-hover:text-[#D00000]">
                  {item.title}
                </h4>
                <p className="font-Montser px-[30px] pb-[20px] text-[14px] md:text-[16px]">
                  {item.des}
                </p>
                <div className="absolute md:top-[3%] md:right-[4%] md:scale-[1] top-[-1%] right-[-3%] scale-[0.6]">
                  <div className="relative bg-[#D00000] py-3 px-[20px] rounded-[20%]">
                    <img
                      src="/images/icons/vec.png"
                      alt="price"
                      className="absolute right-[4%] top-[5%]"
                    />
                    <p className="font-LHanoienne text-white text-left"> Giá</p>
                    <p className="font-LHanoienne text-white text-center">
                      {" "}
                      {item.price}
                    </p>
                    <p className="font-LHanoienne text-white text-right">
                      {" "}
                      vnđ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
