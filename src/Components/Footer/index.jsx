import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Footer() {
  const [mailRecive, setmailRecive] = useState("");
  return (
    <div className="bg-[#200F06]">
      <div className="container mx-auto flex flex-col justify-center items-center px-8 pb-0 lg:pb-[45px]">
        <div className="flex mt-[60px] mb-[60px] w-full justify-center gap-[5px] lg:gap-[40px]">
          <input
            type="text"
            className="flex w-[70%] py-2 lg:px-10 px-1 lg:text-[16px] text-[8px] text-gray-900 border font-Montser border-[#FDDE45] rounded-lg bg-[#FFFADE] sm:text-lg focus:ring-[#FDDE45] focus:border-[#FDDE45] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FDDE45] dark:focus:border-[#FDDE45]"
            placeholder="Nhập email để được nhận thông tin khuyến mãi"
            value={mailRecive}
            onChange={(e) => setmailRecive(e.target.value)}
          />
          <div className="flex justify-center items-center w-[30%] lg:w-[20%] relative group">
            <a
              href={`mailto:bundaurengreng@gmail.com?subject=GET BUN DAU RENG RENG COUPON&body=Email Send Recive: ${mailRecive}`}
            >
              <img
                src="/images/icons/btn.png"
                className="cursor-pointer group-hover:hidden"
                alt="btn"
              />
            </a>

            <a
              href={`mailto:bundaurengreng@gmail.com?subject=GET BUN DAU RENG RENG COUPON&body=Email Send Recive: ${mailRecive}`}
            >
              <img
                src="/images/icons/btn-ac.png"
                className="cursor-pointer hidden group-hover:flex"
                alt="btn"
              />
            </a>

            <p className="font-LHanoienne text-center items-center flex justify-center absolute cursor-pointer group-hover:text-white">
              <a
                href={`mailto:bundaurengreng@gmail.com?subject=GET BUN DAU RENG RENG COUPON&body=Email Send Recive: ${mailRecive}`}
              >
                Gửi ĐI
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 pb-[80px] gap-8 w-full">
          {/* footer info  */}
          <div className="lg:col-span-1 col-span-3 flex items-center lg:items-start flex-col pl-[20px]">
            <div>
              <h3 className="font-LHanoienne text-[#FFFCEB] text-center lg:text-left text-[24px] pb-[20px]">
                BÚN ĐẬU RENG RENG
              </h3>
              <p className="font-Montser text-[#FFFCEB] max-w-[380px]">
                <span className="text-[#FDDE45] font-bold ">Địa Chỉ:</span> 146e
                Gò Dầu, Phường Tân Quý, Quận Tân Phú, TP Hồ Chí Minh
              </p>
              <p className="font-Montser text-[#FFFCEB]">
                <span className="text-[#FDDE45] font-bold">Điện Thoại:</span>{" "}
                0789.4848.66
              </p>
              <p className="font-Montser text-[#FFFCEB]">
                <span className="text-[#FDDE45] font-bold">Email:</span>{" "}
                bundaurengreng@gmail.com
              </p>
            </div>
          </div>

          {/* footer icon  */}
          <div className="lg:col-span-1 col-span-3 flex justify-center">
            <img src="/images/icons/footer-logo.png" alt="ft-icon" />
          </div>
          {/* footer  social */}
          <div className="lg:col-span-1 col-span-3 flex flex-col">
            <div className="flex justify-between lg:mx-0 mx-auto gap-1 lg:gap-6 max-w-[400px] pb-5">
              <NavLink to="/thuc-don">
                <p className="font-LHanoienne text-[#FFFCEB] text-[20px] lg:text-[22px] underline cursor-pointer">
                  Thực Đơn
                </p>
              </NavLink>
              <NavLink to="/bang-tin">
                <p className="font-LHanoienne text-[#FFFCEB] text-[20px] lg:text-[22px] underline cursor-pointer">
                  TIN tức
                </p>
              </NavLink>
              <NavLink to="/chi-nhanh">
                <p className="font-LHanoienne text-[#FFFCEB] text-[20px] lg:text-[22px] underline cursor-pointer">
                  liên hệ
                </p>
              </NavLink>
            </div>
            <div>
              <p className="font-LHanoienne text-[#FFFCEB] text-center lg:text-start text-[22px] cursor-pointer">
                KÊT NỐI VỚI CHÚNG TÔI
              </p>
              <div className="flex pt-5 gap-5 lg:justify-start justify-center">
                <a
                  href="https://www.facebook.com/bundaurengreng"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="/images/icons/fb.png"
                    className="cursor-pointer hover:scale-[1.1]"
                    alt="fb"
                  />
                </a>
                <a
                  href="https://www.instagram.com/bundaurengreng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/icons/ins.png"
                    className="cursor-pointer hover:scale-[1.1]"
                    alt="ins"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@bundaurengreng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/icons/youtube.png"
                    className="cursor-pointer hover:scale-[1.1]"
                    alt="yt"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
