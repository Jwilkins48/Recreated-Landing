import { useState } from "react";

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="bg-[#cafdc6] h-[105px] border-b-[1px] border-[#19554a] lg:px-[18.5%]">
      <div>
        <div className="flex items-center justify-between mx-4  pt-4">
          <div className="">
            <h1 className="text-[#013e39] text-[44px] font-bold tracking-tighter">
              Ruul
            </h1>
          </div>

          {/* DESKTOP NAV START */}
          <div className="hidden lg:flex">
            <ul className=" my-6 flex gap-6 text-[#003e39] cursor-pointer">
              <li className="flex items-center justify-between mr-7 text-lg gap-2">
                For Talents <i className="fa-solid fa-chevron-down text-sm" />
              </li>
              <li className="flex items-center justify-between mr-7 text-lg gap-2">
                For Businesses
                <i className="fa-solid fa-chevron-down text-sm" />
              </li>
              <li className="flex items-center justify-between mr-7 text-lg">
                Pricing
              </li>
              <li className="flex items-center justify-between mr-7 text-lg gap-2">
                Collaborate <i className="fa-solid fa-chevron-down text-sm" />
              </li>
              <li className="flex items-center justify-between mr-7 text-lg gap-2">
                Resources <i className="fa-solid fa-chevron-down text-sm" />
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex">
            <button className="btn bg-white text-neutral capitalize lg:w-28">
              Login
            </button>
            <button className="btn tracking-wider bg-[#003e39] capitalize text-[#cafdc6] mx-6 lg:w-28">
              Sign Up
            </button>
          </div>
          {/* DESKTOP NAV END */}

          {/* MOBILE NAV START */}
          <div className="mobile lg:hidden">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="h-10 w-10 bg-[#f6f8ff] flex items-center justify-center rounded-lg mobile-btn"
            >
              <i className="fa-solid fa-bars text-lg text-[#19554a]" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className={
            dropdownOpen
              ? "open-dropdown absolute w-full mt-5"
              : "close-dropdown absolute w-full mt-5"
          }
        >
          <ul className="pl-8 my-6 flex flex-col gap-8 text-[#003e39]">
            <li className="flex items-center justify-between mr-7 text-lg">
              For Talents <i className="fa-solid fa-chevron-down text-sm" />
            </li>
            <li className="flex items-center justify-between mr-7 text-lg">
              For Businesses
              <i className="fa-solid fa-chevron-down text-sm" />
            </li>
            <li className="flex items-center justify-between mr-7 text-lg">
              Pricing
            </li>
            <li className="flex items-center justify-between mr-7 text-lg">
              Collaborate <i className="fa-solid fa-chevron-down text-sm" />
            </li>
            <li className="flex items-center justify-between mr-7 text-lg">
              Resources <i className="fa-solid fa-chevron-down text-sm" />
            </li>
          </ul>

          <div className="flex flex-col border-t-[1px] border-[#003e39] bg-[#feeeca] h-60">
            <button className="btn bg-white text-neutral capitalize mt-8 mx-6">
              Login
            </button>
            <button className="btn tracking-wider bg-[#003e39] capitalize text-[#cafdc6] my-5 mx-6">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE NAV END */}
    </div>
  );
}
