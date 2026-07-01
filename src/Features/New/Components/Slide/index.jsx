import React from "react";
import { NavLink } from "react-router-dom";
import { LIST_NEWS } from "../../../../Constants/NewData";
import { convertSlug } from "../../../../utils";

export default function Slide() {
  return (
    <div className="flex items-center bg-[#fffceb] overflow-hidden hotdeal-wp flex-col pb-10">
      <div className="container px-8 flex items-center flex-col">
        <h3 className="text-[20px] text-center md:text-[48px] font-LHanoienne pt-[40px] pb-4">
          TIN MỚI NHẤT TỪ <span className="text-[#89AD3F]">RENG RENG</span>
        </h3>
        <div className="bg-[#FFFCEB] rounded-[30px]">
          <div className="border-[3px] border-black rounded-[30px]">
            <div className="border-[2px] border-yellow-500 grid grid-cols-5 rounded-[30px] md:gap-10 gap-4 max-w-[960px] overflow-hidden relative">
              <img
                className="col-span-5 md:col-span-3 h-full"
                src={LIST_NEWS[0].thumbnail}
                alt=""
              />
              <div className="absolute md:top-[3%] md:left-[2%] md:scale-[1] top-[-2%] left-[-5%] scale-[0.6]">
                <div className="relative bg-[#D00000] py-3 px-[30px] rounded-[20%]">
                  <img
                    src="/images/icons/vec.png"
                    alt="price"
                    className="absolute right-[4%] top-[5%]"
                  />
                  <p className="font-LHanoienne text-white text-left"> Tin</p>
                  <p className="font-LHanoienne text-white text-left"> Đặc</p>
                  <p className="font-LHanoienne text-white text-right"> Biệt</p>
                </div>
              </div>
              <div className="col-span-5 md:col-span-2 flex flex-col md:items-start items-center justify-center md:pr-6 px-5 md:px-0 md:pb-0 pb-4 md:py-7">
                <div className="flex gap-6">
                  <div className="flex justify-center items-center relative">
                    <img
                      src="/images/icons/btn-new.png"
                      className="cursor-pointer"
                      alt="btn"
                    />
                    <p className="font-LHanoienne text-[#D00000]  font-bold text-center items-center flex justify-center absolute cursor-pointer">
                      tin tức
                    </p>
                  </div>
                  <div className="flex justify-center items-center relative">
                    <img
                      src="/images/icons/btn-new.png"
                      className="cursor-pointer"
                      alt="btn"
                    />
                    <p className="font-LHanoienne text-[#D00000]  font-bold text-center items-center flex justify-center absolute cursor-pointer">
                      {LIST_NEWS[0].time}
                    </p>
                  </div>
                </div>
                <h3 className="font-LHanoienne text-[22px] mt-4">
                  {LIST_NEWS[0].title}
                </h3>
                <p className="font-Montser text-[14px] mt-2">
                  {LIST_NEWS[0].des}
                </p>
                <NavLink
                  to={`/bai-viet/${convertSlug(LIST_NEWS[0].title)}-${
                    LIST_NEWS[0].id
                  }`}
                  className="ml-auto"
                >
                  <div className="flex justify-center items-center ml-auto relative mt-2 group mb-4">
                    <img
                      src="/images/icons/btn.png"
                      className="cursor-pointer group-hover:hidden"
                      alt="btn"
                    />
                    <img
                      src="/images/icons/btn-ac.png"
                      className="cursor-pointer hidden group-hover:flex"
                      alt="btn"
                    />
                    <p className="font-LHanoienne text-center items-center flex justify-center absolute cursor-pointer group-hover:text-white">
                      Xem Thêm
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
