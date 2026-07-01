import React from "react";
import { LIST_JOB } from "../../../../Constants/JobData";
import JobItem from "../JobItem";

export default function JobList() {
  return (
    <div className="sp flex items-center bg-[#fffceb] bg-icon overflow-hidden flex-col md:min-h-[1080px]">
      <div className="container px-8 flex items-center flex-col pb-12">
        <h3 className="text-[28px] pb-10 text-center md:text-[48px] font-LHanoienne pt-[40px]">
          <span className="text-[#D00000]">RENG RENG</span> tìm bạn đồng hành
        </h3>
        {LIST_JOB.map((item, index) => {
          return (
            <div
              className="flex flex-col md:flex-row gap-[20px] mb-9 max-w-[950px]"
              key={index}
            >
              <JobItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
