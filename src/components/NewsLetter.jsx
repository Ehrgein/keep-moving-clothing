import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { SiVisa, SiMastercard, SiDiscover } from "react-icons/si";
import { FaCcPaypal, FaTiktok } from "react-icons/fa";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

function NewsLetter() {
  return (
    <div className="bg-black 4k:pb-12 laptopL:pb-10">
      <div className="hidden md:flex justify-between w-full ">
        <div className="flex h-auto w-[25%] bg-black text-white col-span-4 flex-col justify-start items-start pb-20">
          <h1 className="mb-4 ml-8 tablet:mt-4 uppercase 4k:text-2xl font-bold text-[#aaa]">
            Our Store
          </h1>
          <ul className="4k:text-xl 4k:mt-3">
            <li className="ml-8 ">Evergreen Terrace 742 </li>
            <li className="ml-8">San Francisco </li>
            <li className="ml-8"> California</li>
            <li className="ml-8"> AC9412</li>
            <li className="ml-8"> United States </li>
            <li className="ml-8"> Mon - Fri 9.30am - 4:30pm</li>
            <li className="ml-8"> Sat & Sun - Closed </li>
          </ul>
        </div>
        <div className="flex h-auto w-[25%] bg-black text-white col-span-4 flex-col justify-start items-start">
          <h1 className="mb-4 mt-4 ml-4 uppercase 4k:text-2xl font-bold text-[#aaa]">
            Customer Support
          </h1>
          <ul className="4k:text-xl 4k:mt-3">
            <li className="ml-4">FAQs</li>
            <li className="ml-4 ">Payments</li>
            <li className="ml-4 ">Shipping</li>
            <li className="ml-4 ">Return Policy</li>
            <li className="ml-4 ">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex h-auto w-[15%] bg-black text-white col-span-4 flex-col justify-start items-start">
          <h1 className="mb-4 mt-4 ml-4 uppercase 4k:text-2xl font-bold text-[#aaa]">
            Fine Print
          </h1>
          <ul className="4k:text-xl 4k:mt-3">
            <li className="ml-4">Terms of Service</li>
            <li className="ml-4 ">Terms & Conditions</li>
            <li className="ml-4 ">Accesibility</li>
          </ul>
        </div>
        <div className="flex h-auto w-[36%] bg-black text-white col-span-3 flex-col justify-start items-center">
          <h1 className="mb-4 tablet:mt-4 ml-4 uppercase 4k:text-2xl text-lg font-bold text-[#aaa]">
            JOIN OUR NEWSLETTER
          </h1>
          <div className="flex border-white">
            <input
              placeholder="Enter your Email"
              className="h-12 desktop:w-96 laptopL:w-60 md:w-48 text-black text-lg"
            />
            <RiArrowRightSLine
              className="border-white border-2
             desktop:w-[48px] desktop:h-[48px] laptop:h-[48px] laptop:w-[48px] tablet:w-[48px] tablet:h-[48px] mobileL:w-[30px] mobileL:h-[30px]"
            />
          </div>
          <h1 className="mb-4 mt-4 ml-4 uppercase text-lg font-bold text-[#aaa] text-start">
            Follow Us
          </h1>
          <div className="flex justify-start items-start ">
            <a href="https://www.twitter.com/">
              <BsTwitter className="mx-2" size={20} />
            </a>
            <a href="https://www.facebook.com/">
              <BsFacebook className="mx-2" size={20} />
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram className="mx-2" size={20} />
            </a>
            <a href="https://www.tiktok.com/">
              <FaTiktok className="mx-2" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center pt-4 bg-black text-white w-full h-24">
        <SiVisa className="mx-2" size={40} />
        <SiMastercard className="mx-2" size={40} />
        <SiDiscover className="mx-2" size={40} />
        <FaCcPaypal className="mx-2" size={40} />
      </div>

      {/*mobile starts here */}

      <div className="md:hidden bg-black text-white">
        <div className="text-sm text-center pt-4">
          <div className="">
            <p className="mx-4 font-medium text-center uppercase">
              Join our newsletter{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <input
              placeholder="Email"
              className="placeholder:pl-2 mt-3 w-[70%] text-black text-base mb-3 h-10"
            />
            <RiArrowRightSLine
              className="border-white border-2 mobilexs:w-[40px] mobilexs:h-[40px]
              mobileM:w-[30] mt-3"
            />
          </div>
          <h1 className="mt-2 font-semibold text-lg">About</h1>
          <h1 className="mt-2 font-semibold text-lg">Contact Us</h1>
          <h1 className="mt-2 font-semibold text-lg"> FAQ </h1>
          <h1 className="mt-2 font-semibold text-lg">Payments </h1>
          <h1 className="mt-2 font-semibold text-lg">Shipping</h1>
          <h1 className="mt-2 font-semibold text-lg">Return Policy</h1>
          <h1 className="mt-2 font-semibold text-lg">Privacy Policy</h1>
          <h1 className="mt-2 font-semibold text-lg">Terms & Conditions</h1>
          <h1 className="mt-2 font-semibold text-lg">Gift Cards</h1>
          <h1 className="mt-2 font-semibold text-lg">Terms of Service</h1>
          <h1 className="mt-2 font-semibold text-lg pb-4">Refund Policy</h1>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
