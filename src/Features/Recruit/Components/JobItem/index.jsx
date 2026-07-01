import React from "react";

export default function JobItem({ item }) {
  // console.log(item.require[0]);
  return (
    <>
      <img src={item.img} alt="" />
      <div className="flex flex-col justify-center max-w-[860px]">
        <div>
          <h4 className="font-LHanoienne">{item.title}</h4>
          <p className="font-Montser">{item.des}</p>
        </div>
        <div className="flex justify-between md:flex-row flex-col items-end mt-4">
          <div className="max-w-[267px]">
            <p className="font-LHanoienne pb-3">Yêu Cầu:</p>
            {item.require.map((item, index) => {
              return (
                <p className="font-Montser" key={index}>
                  * {item}
                </p>
              );
            })}
          </div>
          <div className="flex justify-center items-center w-[50%] lg:w-[20%] relative group">
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
              <a
                href="mailto:bundaurengreng@gmail.com"
                className="md:text-[16px] "
              >
                {" "}
                Ứng Tuyển{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
