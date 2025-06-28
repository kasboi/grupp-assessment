import React from "react";
import { Input } from "./Input";

export function ActiveMail({ EnvelopeIcon }) {
  return (
    <>
      <div className="mt-6">
        <h2 className="text-xl mb-1">User Roles</h2>
        <p className="text-md text-gray-500 mb-4">
          Update your roles details and information.
        </p>
      </div>
      <div className="md:flex border-y py-6 mb-10 md:mb-6">
        <div className="mb-6 md:mr-20">
          <h2 className="text-md font-semibold">Connected email</h2>
          <p className="text-md text-gray-500 mb-4">Select role account</p>
        </div>
        <div className="flex-1">
          <label className="flex items-center mb-6 space-x-3">
            <input
              type="radio"
              name="checked-demo"
              className="accent-purple-600"
              id="color"
            />
            <div className="font-normal">
              <h3 className="text-base">My account email</h3>
              <p className="text-gray-700 text-base">olivia@untitledui.com</p>
            </div>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="checked-demo"
              className="accent-purple-600"
              id="color"
            />
            <div className="font-normal sm:min-w-[20rem] md:min-w-[30rem]">
              <h3 className="text-base">An alternative email</h3>
              <Input
                Icon={EnvelopeIcon}
                type={"email"}
                placeholder={"billing@untitledui.com"}
              />
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
