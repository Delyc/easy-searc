import React from "react";
import { sidebarItems } from "@/components/utils/data";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useSelector } from "react-redux";
const AdminSidenav = () => {
  const { userInfo } = useSelector((state: any) => state)
console.log("test", userInfo)
  return (
    <>
      <div className=" flex flex-col justify-between py-20 w-[16rem] h-screen z-10  bg-primary-blue font-sans border-r border-[#e7e5e5] ">
        <div className="mb-2">
          <div>
            <h1>Home</h1>
            <p>Delyce</p>
          </div>
          <ul className=" min:mt-0 pl-4 block mt-6">
            {sidebarItems.map((items, index) => {
              return (
                <li
                  key={index}
                  className=" min:text-xl lg:justify-content-start align-items-center text-[#1b173f] text-base mb-2"
                >
                  <Link
                    href={items.path}
                    className="is-active focus:text-primary-blue  p-1 flex align-items-center leading-3 cursor-pointer font-semibold hover:font-bold  "
                  >
                    <label className="mr-3 p-1 text-[16px]">{items.icon}</label>
                    <label className="p-1  ">{items.title} </label>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

<div className="flex justify-center">
<Button className="bg-[#252B42] w-1/2 text-white  font-medium rounded" text="Logout"/>

</div>
      </div>
    </>
  );
};
export default AdminSidenav;