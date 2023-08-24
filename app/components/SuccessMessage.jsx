"use client";
import React from "react";
import SuccessAnimation from "./SuccessAnimation";
import Link from "next/link";

const SuccessMessage = (props) => {
  return (
    <div className="fixed inset-0 z-50 p-6 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative text-center w-96 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 ">
        <div className="p-6">
          <SuccessAnimation />
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Success
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {props.description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40  active:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            <Link href={props.linkUrl}>{props.btn_name}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
