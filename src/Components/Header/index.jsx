import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  const [menuActive, setmenuActive] = useState(false);
  return (
    <div className="flex justify-center bg-[#200F06]">
      <div className="flex justify-center gap-[140px] items-center md:items-end container px-8 text-white md:pt-[15px] pt-[0px] pb-[0px] md:pb-[25px]">
        <div>
          <img
            src="/images/logo.png"
            className="md:scale-[1] scale-[0.8]"
            alt="Bún đậu reng reng"
          />
        </div>
        <div className="hidden font-LHanoienne md:gap-6 lg:gap-10 md:flex">
          <NavLink to="/">
            <p className="cursor-pointer menu hover:text-[#FDDE45] text-[16px]">
              Câu Chuyện
            </p>
          </NavLink>
          <NavLink to="/thuc-don">
            <p className="cursor-pointer menu hover:text-[#FDDE45] text-[16px]">
              Thực Đơn
            </p>
          </NavLink>
          <NavLink to="/bang-tin">
            <p className="cursor-pointer menu hover:text-[#FDDE45] text-[16px]">
              Bảng Tin - Khuyến Mãi
            </p>
          </NavLink>

          <NavLink to="/chi-nhanh">
            <p className="cursor-pointer menu hover:text-[#FDDE45] text-[16px]">
              Chi Nhánh
            </p>
          </NavLink>

          <NavLink to="/tuyen-dung">
            <p className="cursor-pointer menu hover:text-[#FDDE45] text-[16px]">
              Tuyển dụng
            </p>
          </NavLink>
        </div>

        {/* MOBILE  */}
        <div className="flex md:hidden">
          <img
            className="pt-5"
            src="/images/icons/menu-mb.png"
            alt="menu"
            onClick={() => setmenuActive(!menuActive)}
          />
        </div>
        <div
          className={`fixed top-[0px] z-50 w-full bg-[#908572] font-LHanoienne h-screen md:hidden ${
            menuActive ? "menu-active" : "menu-none"
          }`}
        >
          <div className="px-[60px] flex justify-between gap-4 bg-[#200F06] items-center pb-2 pt-2 z-50">
            <div>
              <img src="/images/logo.png" alt="Bún đậu reng reng" />
            </div>
            <div className="">
              <img
                className="pt-5"
                src="/images/icons/menu-mb.png"
                alt="menu"
                onClick={() => setmenuActive(!menuActive)}
              />
              {/* <p
                className="font-LHanoienne text-[30px] text-[#ec9a11] pt-5"
                onClick={() => setmenuActive(!menuActive)}
              >
                X
              </p> */}
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px] h-full justify-center pb-[200px] relative overflow-hidden">
            <img
              src="/images/icons/smile.png"
              className="absolute left-[-8%] top-[-12%]"
              alt="Bún Đậu"
            />
            <img
              src="/images/icons/hot-icon1.png"
              className="absolute right-[3%] top-[3%]"
              alt="Bún Đậu"
            />
            <img
              src="/images/icons/chili.png"
              className="absolute right-[15%] bottom-[40%] animate-pings"
              alt="Bún Đậu"
            />
            <img
              src="/images/icons/hot-icon5.png"
              className="absolute left-[5%] rotate-2 bottom-[30%] animate-pings"
              alt="Bún Đậu"
            />
            <NavLink to="/">
              <p className="cursor-pointer z-10 text-[16px] bg-[#200F06] px-[15px] py-[8px] min-w-[152px] w-[170px] text-center">
                Câu Chuyện
              </p>
            </NavLink>

            <NavLink to="/thuc-don">
              <p className="cursor-pointer z-10 text-[16px] bg-[#200F06] px-[15px] py-[8px] min-w-[152px] w-[170px] text-center">
                Thực Đơn
              </p>
            </NavLink>

            <NavLink to="/bang-tin">
              <p className="cursor-pointer z-10 text-[16px] bg-[#200F06] px-[15px] py-[8px] min-w-[152px] w-[170px] text-center">
                Bảng Tin - Khuyến Mãi
              </p>
            </NavLink>

            <NavLink to="/chi-nhanh">
              <p className="cursor-pointer z-10 text-[16px] bg-[#200F06] px-[15px] py-[8px] min-w-[152px] w-[170px] text-center">
                Chi Nhánh
              </p>
            </NavLink>

            <NavLink to="/tuyen-dung">
              <p className="cursor-pointer z-10 text-[16px] bg-[#200F06] px-[15px] py-[8px] min-w-[152px] w-[170px] text-center">
                Tuyển dụng
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
