import React from "react";
import DrinkMenu from "../DrinkMenu";
import ExtraMenu from "../ExtraMenu";
import MainMenu from "../MainMenu";
import SubMenu from "../SubMenu";

export default function MenuContent() {
  return (
    <>
      <div className="sp flex items-center bg-[#fffceb] bg-icon overflow-hidden flex-col">
        <div className="container px-8 flex items-center flex-col">
          <h3 className="text-[28px] pb-3 text-center md:text-[48px] font-LHanoienne pt-[40px] max-w-[800px]">
            Thực đơn <span className="text-[#D00000]">RENG RENG</span>
          </h3>
        </div>
        <MainMenu />
        <ExtraMenu />
        <SubMenu />
        <DrinkMenu />
      </div>
    </>
  );
}
