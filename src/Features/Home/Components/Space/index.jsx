import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { LIST_NEWS } from "../../../../Constants/NewData";
import { convertSlug } from "../../../../utils";
import "./style.css";
export default function Space() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="sp flex items-center bg-[#fffceb] bg-icon overflow-hidden flex-col">
      <div className="container flex items-center flex-col">
        <h3 className="text-[20px] text-center md:text-[48px] font-LHanoienne pt-[40px] max-w-[800px]">
          KHÔNG GIAN <span className="text-[#89AD3F]">RENG RENG</span> ĂN NGON
          TIỆN NGHI
        </h3>
        {/* SPACE  */}
        <div className="grid grid-cols-5 pt-8 pb-14 px-6 md:px-0 gap-4 md:gap-9">
          <div className="flex flex-col gap-6 md:gap-[40px] col-span-5 md:pb-0 pb-6 md:col-span-2 items-center justify-center">
            <div>
              <img
                src="/images/home/space1.png"
                className=" rounded-[10%] "
                alt="bun dau"
              />
            </div>
            <div className="relative">
              <img
                src="/images/home/space2.png"
                className=" rounded-[10%] "
                alt="bun dau"
              />
            </div>
          </div>
          <div className="w-[100%] col-span-5 md:col-span-3 max-w-[650px] items-center m-auto">
            <Slider {...settings}>
              <div className="px-1">
                <img
                  src="/images/home/space-slide1.png"
                  className=" rounded-[8%]"
                  alt=""
                />
              </div>
              <div className="px-1">
                <img
                  src="/images/home/space-slide4.png"
                  className=" rounded-[8%]"
                  alt=""
                />
              </div>
              <div className="px-1">
                <img
                  src="/images/home/space-slide2.png"
                  className=" rounded-[8%]"
                  alt=""
                />
              </div>
              <div className="px-1">
                <img
                  src="/images/home/space-slide3.png"
                  className=" rounded-[8%]"
                  alt=""
                />
              </div>
              <div className="px-1">
                <img
                  src="/images/home/space-slide5.png"
                  className=" rounded-[8%]"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>

        {/* NEW  */}
        <div className="container flex items-center justify-start px-8">
          {" "}
          <h3 className="text-[20px] text-left md:text-[48px] font-LHanoienne pt-[40px] ">
            tIN Tức <span className="text-[#FFAC0D]">RENG RENG</span>
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
    </div>
  );
}
