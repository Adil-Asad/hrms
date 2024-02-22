import React from "react";

function JobDetails() {
  return (
    <div className=" flex gap-5  ">
      <div className="w-full">
        {/* box 1 */}
        <div className="w-full h-screen max-h-[671px] p-5 bg-white rounded-lg flex-col gap-5 flex">
          <div className="w-full  flex-col gap-[15px] flex">
            <div className="w-full text-accent  font-semibold font-barlow leading-tight tracking-tight">
              Job Descriptions
            </div>
            <div className="w-full text-subheading  font-normal font-barlow leading-normal tracking-tight">
              Design mold drawings, tools, and check molds before putting them
              into sample production.
              <br />
              Set up mold manufacturing standards
              <br />• Dotermine standard spocifications of sample products.
              Research for product improvement.
              <br />
              Participate and organize meetings to deploy new products. Browse
              samples of post-printing stages.
              <br />• Browse samples of post-printing stages, Calculate mold and
              print standards for each product.
              <br />• Simplify complex products, interfaces from scratch across
              multiple platforms.
              <br />
              Collaborate with managers and technical team throughout the
              life-cycle such as product wireframes, mockups and visual design
            </div>
          </div>
          <div className="w-full  flex-col gap-[15px] flex">
            <div className="text-accent  font-semibold font-barlow leading-tight tracking-tight">
              Requirements
            </div>
            <div className=" text-subheading  font-normal font-barlow leading-normal tracking-tight">
              • Graduated in university, proficient in using AutoCard and
              different design software.
              <br />• Able to distinguish differences.
              <br />• Hardworking, eager to learn and have desire to strive for
              personal development.
              <br />
              Excellent communication skills: should be comfortable presenting
              work to product managers. stakeholders, and technical engineering
              staffs.
              <br />• Age: From 20 to 30
            </div>
          </div>
          <div className="w-full  flex-col gap-[15px] flex">
            <div className="w-full text-accent  font-semibold font-barlow leading-tight tracking-tight">
              Benefits
            </div>
            <div className="w-full text-subheading  font-normal font-barlow leading-normal tracking-tight">
              • Salary and bonus depend on ability and level of meeting requir.
              <br />
              •Uniforms and lunch are provided free.
              <br />
              Bonus on all holidays, 13rd month bonus.
              <br />• Travel vacations twice a year.
            </div>
          </div>
        </div>
      </div>

      {/* box 2 */}
      <div className="w-full max-w-[367px] h-screen max-h-[438px] px-[15px] py-5 bg-white rounded-lg flex-col gap-5 flex">
        <div className="w-full  flex-col justify-center  gap-[5px] flex">
          <div className="text-accent text-xl font-semibold font-inter leading-normal border-b pb-3 border-[#80807D80]">
            Job Details
          </div>
        </div>
        <div className="w-full h-[39px] flex-col justify-center  gap-[5px] flex">
          <div className="text-dim text-sm font-semibold font-inter leading-[16.80px]">
            Department
          </div>
          <div className="w-full text-subheading text-sm font-semibold font-inter leading-[16.80px]">
            UI/UX Designer
          </div>
        </div>
        <div className="w-full h-[39px] flex-col justify-center  gap-[5px] flex">
          <div className="w-full text-dim text-sm font-semibold font-inter leading-[16.80px]">
            Job Type
          </div>
          <div className="w-full text-subheading text-sm font-semibold font-inter leading-[16.80px]">
            Fulltime
          </div>
        </div>
        <div className="w-full h-[39px] flex-col justify-center  gap-[5px] flex">
          <div className="w-full text-dim text-sm font-semibold font-inter leading-[16.80px]">
            Recruitment Quota
          </div>
          <div className="w-full text-subheading text-sm font-semibold font-inter leading-[16.80px]">
            30
          </div>
        </div>
        <div className="w-full h-[39px] flex-col justify-center  gap-[5px] flex">
          <div className="text-dim text-sm font-semibold font-inter leading-[16.80px]">
            Salary Range
          </div>
          <div className="text-subheading text-sm font-semibold font-inter leading-[16.80px]">
            $400 - $800
          </div>
        </div>
        <div className="h-[39px] flex-col justify-center  gap-[5px] flex">
          <div className="text-dim text-sm font-semibold font-inter leading-[16.80px]">
            Recruitment Period
          </div>
          <div className="text-subheading text-sm font-semibold font-inter leading-[16.80px]">
            Dec17, 2023 to Jan 05, 2024
          </div>
        </div>
        <div className="h-[39px] flex-col justify-center  gap-[5px] flex">
          <div className="text-dim text-sm font-semibold font-inter leading-[16.80px]">
            Working Location
          </div>
          <div className="text-subheading text-sm font-semibold font-inter leading-[16.80px]">
            109k Gulberg 3 Lahore
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
