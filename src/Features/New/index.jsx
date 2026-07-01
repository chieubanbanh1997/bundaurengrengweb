import React from "react";
import { NavLink } from "react-router-dom";
import BackToTop from "../../Components/BackToTop";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { LIST_NEWS } from "../../Constants/NewData";
import { convertSlug } from "../../utils";
import Slide from "./Components/Slide";

export default function New() {
  return (
    <>
      <Header />
      <Slide />
      <div className="sp flex items-center bg-[#fffceb] bg-icon overflow-hidden flex-col">
        <div className="container flex items-center justify-start px-8">
          <h3 className="text-[20px] text-left md:text-[48px] font-LHanoienne pt-[40px] ">
            KHUYẾN MÃI Ở <span className="text-[#D00000]">RENG RENG</span>
          </h3>
        </div>
        <div className="container px-8 flex justify-center pt-5 pb-[40px] md:pb-[90px]">
          <div className="flex gap-8 justify-center md:flex-row flex-col">
            {LIST_NEWS.map((item, index) => {
              if (item.home) {
                return (
                  <div
                    className="p-[1px] rounded-[10%] group max-w-[439px] border-[2px]"
                    key={item.id}
                  >
                    <div className="rounded-[10%] overflow-hidden h-[100%] relative">
                      <NavLink
                        to={`/bai-viet/${convertSlug(item.title)}-${item.id}`}
                      >
                        <img
                          src={`${item.thumbnail}`}
                          alt={item.title}
                          className="w-full cursor-pointer hover:scale-[1.05] ease-linear duration-[0.5s] transition-all"
                        />
                      </NavLink>

                      <p className="pt-4 font-bold text-[#908679] text-[14px] md:text-[16px] px-3">
                        {item.time}
                      </p>
                      <NavLink
                        to={`/bai-viet/${convertSlug(item.title)}-${item.id}`}
                      >
                        <h4 className="font-LHanoienne uppercase pt-[10px] pb-[10px] text-[18px] px-3 md:text-[24px] font-bold group-hover:text-[#D00000]">
                          {item.title}
                        </h4>
                      </NavLink>
                      <p className="font-Montser pb-[40px] text-[14px] md:text-[16px] px-3">
                        {item.des}
                      </p>
                      {item.hotTitle.length > 0 && (
                        <div className="absolute md:top-[3%] md:right-[4%] md:scale-[1] top-[-1%] right-[-3%] scale-[0.6]">
                          <div className="relative bg-[#D00000] py-2 px-[24px] rounded-[20%]">
                            <img
                              src="/images/icons/vec.png"
                              alt="price"
                              className="absolute right-[4%] top-[5%]"
                            />
                            {item.hotTitle == "spec" ? (
                              <>
                                <p className="font-LHanoienne text-[10px] text-white text-left">
                                  tin
                                </p>

                                <p className="font-Montser font-[800] text-[20px] text-white text-left">
                                  Đặc
                                </p>
                                <p className="font-Montser font-[800] text-[20px] text-white text-left">
                                  Biệt
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="font-LHanoienne text-[10px] text-white text-left">
                                  ngon
                                </p>

                                <p className="font-Montser font-[800] text-[20px] text-white text-left">
                                  mỗi
                                </p>
                                <p className="font-Montser font-[800] text-[20px] text-white text-left">
                                  ngày
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
