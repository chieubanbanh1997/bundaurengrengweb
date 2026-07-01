import React, { useEffect, useState } from "react";
import "./style.css";
import Marquee from "react-fast-marquee";
import { ICONS } from "../../../../Constants/HotDeal";
import { LIST_FOODS } from "../../../../Constants/FoodData";
import { NavLink } from "react-router-dom";

export default function HotDeal() {
  const [changeDeal, setchangeDeal] = useState("hotdeal-default");
  useEffect(() => {
    setTimeout(() => {
      if (changeDeal == "hotdeal-default") {
        setchangeDeal("hotdeal-sp");
      } else {
        setchangeDeal("hotdeal-default");
      }
    }, 1000);
  }, [changeDeal]);
  return (
    <div className="flex items-center bg-[#fffceb] overflow-hidden hotdeal-wp flex-col">
      <div className="container px-8 flex items-center flex-col">
        <h3 className="text-[20px] text-center md:text-[48px] font-LHanoienne pt-[40px]">
          món ngon tạI <span className="text-[#D00000]">RENG RENG</span>
        </h3>
      </div>
      <div className="gap-[15px] flex mt-[20px]">
        <Marquee
          gradient={false}
          speed={50}
          direction="left"
          pauseOnClick={true}
        >
          {ICONS.map((item, index) => (
            <div key={index} className="px-[20px]">
              <img className="md:w-auto w-[70%]" src={item.img} alt="" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* hot item  */}
      <div className="container lg:px-10 flex justify-center mt-8 pb-8">
        <div className="grid grid-cols-2 gap-[20px] items-center">
          <div className="relative smooth lg:col-span-1 col-span-2 mx-auto p-[20px] lg:p-[40px] cursor-pointer group overflow-hidden transition-all ease-linear duration-[1s] delay-150">
            <img
              src="/images/home/hotdeal-thumnail.png"
              className=""
              alt="hotdeal"
            />
            <img
              className="absolute top-[4%] right-[5%] lg:w-auto w-[35%]"
              src={`/images/home/${changeDeal}.png`}
              alt="hotdeal"
            />
            <img
              className="absolute smooth transition-all ease-linear duration-75 lg:group-hover:bottom-0 bottom-0 left-0 lg:group-hover:left-[0px] lg:left-[-34%] lg:w-auto w-[35%] lg:bottom-[0px]"
              src={`/images/home/hotdeal-chanh.png`}
              alt="hotdeal"
            />
            <img
              className="absolute smooth transition-all ease-linear duration-75 lg:group-hover:top-0 top-0 left-0 lg:group-hover:left-[0px] lg:left-[-34%] lg:w-auto w-[35%] lg:top-[0px]"
              src={`/images/home/hotdeal-tac.png`}
              alt="hotdeal"
            />
            <img
              className="absolute smooth transition-all ease-linear duration-75 lg:group-hover:bottom-0 bottom-0 right-0 lg:group-hover:right-[0px] lg:right-[-34%] lg:w-auto w-[35%] lg:bottom-[0px]"
              src={`/images/home/hotdeal-mam.png`}
              alt="hotdeal"
            />
            {/* <img
              className="absolute smooth transition-all ease-linear duration-75 md:group-hover:top-0 top-0 right-0 md:group-hover:right-[0px] md:right-[-34%] md:w-auto w-[35%] md:top-[0px]"
              src={`/images/home/hotdeal-rau.png`}
              alt="hotdeal"
            /> */}
          </div>
          <div className="lg:col-span-1 col-span-2 pl-[20px] mx-auto lg:mx-0">
            <h4 className="font-LHanoienne text-[18px] md:text-[40px] max-w-[450px]">
              BÚN ĐẬU ĐẦY ẤP (3-4 người ăn)
            </h4>
            <p className="max-w-[450px] font-Montser text-[15px] md:text-[24px] pt-3">
              Bún lá, đậu hũ, thịt heo luộc, nem chua rán, chả cốm, chả giò, chả
              cua, chả ốc, chả sụn, chả lụa chiên, cà pháo, rau thơm
            </p>
            <div className="flex mt-4 justify-center lg:justify-start">
              <NavLink to="/thuc-don">
                <p className="font-LHanoienne font-bold text-[16px] md:text-[20px] px-[25px] py-[9px] bg-[#FEE046] rounded-[15px] cursor-pointer hover:border-[2px] hover:border-[#200F06] hover:shadow-xl hover:text-white hover:bg-[#D00000]">
                  XEM THÊM MENU
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* list hot item  */}

      <div className="container px-5 lg:px-20 pb-[40px]">
        <div className="flex gap-14 justify-center md:flex-row flex-col">
          {/* item  */}
          {LIST_FOODS.map((item, index) => {
            return (
              <div
                className={`border-[3px] border-black p-[1px] rounded-[10%] hover:bg-[#FDDE45] max-w-[439px] ${
                  !item.isHome && "hidden"
                }`}
                key={index}
              >
                <div className="border-[2px] border-[#FDDE45] rounded-[10%] overflow-hidden h-[100%] relative">
                  <img
                    src={`${item.thumbnail}`}
                    alt={item.title}
                    className="w-full cursor-pointer hover:scale-[1.05] ease-linear duration-[0.5s] transition-all"
                  />
                  <h4 className="font-LHanoienne uppercase px-[30px] pt-[15px] pb-[10px] text-[18px] md:text-[24px] font-bold cursor-pointer">
                    {item.title}
                  </h4>
                  <p className="font-Montser px-[30px] pb-[20px] text-[14px] md:text-[20px]">
                    {item.des}
                  </p>
                  <div className="absolute md:top-[3%] md:right-[4%] md:scale-[1] top-[-1%] right-[-3%] scale-[0.6]">
                    <div className="relative bg-[#D00000] py-3 px-[20px] rounded-[20%]">
                      <img
                        src="/images/icons/vec.png"
                        alt="price"
                        className="absolute right-[4%] top-[5%]"
                      />
                      <p className="font-LHanoienne text-white text-left">
                        {" "}
                        Giá
                      </p>
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
    </div>
  );
}
