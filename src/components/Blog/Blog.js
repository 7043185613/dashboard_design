import React, { useEffect } from "react";
import brand_1 from '../../img/Brand icon.png'
import chart from '../../img/Chart.png'
import frame from '../../img/Frame.png'

function Blog() {
  return (
    <div className="blog p-[32px]">
      <div class="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-4 bg-[#ffffff] border-[1px] rounded-xl p-[20px] lg:p-[15px] sm:p-[10px]">
          <div className="">
            <img className="w-[100%] max-w-[48px] md:max-w-[40px] sm:max-w-[35px]" src={brand_1} />
          </div>
          <div className="flex flex-col justify-start">
            <span className="text-[14px] text-[#666D80]">Applications</span>
            <span className="text-[24px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[#15161E] font-semibold">22</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#ffffff] border-[1px] rounded-xl p-[20px] lg:p-[15px] sm:p-[10px]">
          <div className="">
            <img className="w-[100%] max-w-[48px] md:max-w-[40px] sm:max-w-[35px]" src={brand_1} />
          </div>
          <div className="flex flex-col justify-start">
            <span className="text-[14px] text-[#666D80]">Applications</span>
            <span className="text-[24px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[#15161E] font-semibold">22</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#ffffff] border-[1px] rounded-xl p-[20px] lg:p-[15px] sm:p-[10px]">
          <div className="">
            <img className="w-[100%] max-w-[48px] md:max-w-[40px] sm:max-w-[35px]" src={brand_1} />
          </div>
          <div className="flex flex-col justify-start">
            <span className="text-[14px] text-[#666D80]">Applications</span>
            <span className="text-[24px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[#15161E] font-semibold">22</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#ffffff] border-[1px] rounded-xl p-[20px] lg:p-[15px] sm:p-[10px]">
          <div className="">
            <img className="w-[100%] max-w-[48px] md:max-w-[40px] sm:max-w-[35px]" src={brand_1} />
          </div>
          <div className="flex flex-col justify-start">
            <span className="text-[14px] text-[#666D80]">Applications</span>
            <span className="text-[24px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[#15161E] font-semibold">22</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#ffffff] border-[1px] rounded-xl p-[20px] lg:p-[15px] sm:p-[10px]">
          <div className="">
            <img className="w-[100%] max-w-[48px] md:max-w-[40px] sm:max-w-[35px]" src={brand_1} />
          </div>
          <div className="flex flex-col justify-start">
            <span className="text-[14px] text-[#666D80]">Applications</span>
            <span className="text-[24px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[#15161E] font-semibold">22</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#ffffff] border-[1px] rounded-xl p-[20px] lg:p-[15px] sm:p-[10px]">
          <div className="">
            <img className="w-[100%] max-w-[48px] md:max-w-[40px] sm:max-w-[35px]" src={brand_1} />
          </div>
          <div className="flex flex-col justify-start">
            <span className="text-[14px] text-[#666D80]">Applications</span>
            <span className="text-[24px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[#15161E] font-semibold">22</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 pt-[32px] xl:flex-row lg:flex-row md:flex-col sm:flex-col">
        <div className=" max-w-[815px] w-full">
          <img className="w-[100%]" src={chart} />
        </div>
        <div className="bg-[#ffffff] border-[#DFE1E6] border-[1px] rounded-xl max-w-[384px] w-full">
          <div className="flex justify-between items-center px-[20px] pt-[16px] 2xl:p-[16px] xl:pt-[10px] lg:pt-[10px] md:pt-[10px] sm:pt-[10px]">
            <div className="">
              <span className="text-[18px] font-semibold text-[#15161E] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[16px]">Message</span>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-3 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-[14px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[13px] sm:text-[13px] text-[#15161E] font-medium 2xl:px-4 2xl:py-3 xl:px-3 xl:py-2 lg:px-3 lg:py-2 md:px-3 md:py-2 sm:px-3 sm:py-2"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                This Moths
                <svg
                  className="-mr-1 h-5 w-5  text-[#15161E]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="p-[20px] 2xl:p-[20px] xl:p-[15px] lg:p-[15px] md:p-[15px] sm:p-[15px]">
            <img className="w-[100%] max-w-[130px] 2xl:max-w-[130px] xl:max-w-[130px] lg:max-w-[130px] md:max-w-[100px] sm:max-w-[100px] m-[auto] mt-[20px] mb-[40px] 2xl:mt-[16px] 2xl:mb-[40px] xl:mt-[10px] xl:mb-[30px] lg:mt-[10px] lg:mb-[30px] md:mt-[10px] md:mb-[30px] sm:mt-[10px] sm:mb-[30px]" src={frame} />
            <div class="grid grid-cols-3 gap-8 justify-center 2xl:gap-8 xl:gap-4 lg:gap-4 md:gap-4 sm:gap-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#15161E]"></span>
                  <span className="text-[#15161E] font-semibold text-[14px]">3.5K</span>
                </div>
                <span className="text-[#666D80] text-[12px]">Applications</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#15161E]"></span>
                  <span className="text-[#15161E] font-semibold text-[14px]">3.5K</span>
                </div>
                <span className="text-[#666D80] text-[12px]">Applications</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#15161E]"></span>
                  <span className="text-[#15161E] font-semibold text-[14px]">3.5K</span>
                </div>
                <span className="text-[#666D80] text-[12px]">Applications</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#15161E]"></span>
                  <span className="text-[#15161E] font-semibold text-[14px]">3.5K</span>
                </div>
                <span className="text-[#666D80] text-[12px]">Applications</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#15161E]"></span>
                  <span className="text-[#15161E] font-semibold text-[14px]">3.5K</span>
                </div>
                <span className="text-[#666D80] text-[12px]">Applications</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#15161E]"></span>
                  <span className="text-[#15161E] font-semibold text-[14px]">3.5K</span>
                </div>
                <span className="text-[#666D80] text-[12px]">Applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;
