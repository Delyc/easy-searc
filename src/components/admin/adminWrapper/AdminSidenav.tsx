import React from "react";
import { sidebarItems } from "@/components/utils/data";
import Link from "next/link";
import { logout } from "@/redux/reducers/authSlice";
import Button from "@/components/ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { LogoutIcon } from "@/components/svgs/Icons";

const AdminSidenav = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state: any) => state)
  return (
    <>
      <div className=" flex flex-col justify-between pb-20 w-80 h-screen z-10  bg-primary-blue font-sans border-r">
        <div className="mb-2">
          <Link href="/" className="flex flex-col gap-2 items-center  bg-white/30 py-5 justify-center w-full">
            <h1 className="text-3xl text-dark-blue font-bold">e~Search</h1>
            <p className="text-[12px] italic text-dark-blue font-bold">Lost it  | claim it  | get it</p>
          </Link>
          <div className="mt-20 px-3">
            <p className="text-white">Delyce</p>
          </div>
          <ul className=" min:mt-0 px-6 block mt-6">
            {sidebarItems.map((items, index) => {
              return (
                <li
                  key={index}
                  className=" min:text-xl lg:justify-content-start align-items-center text-[#1b173f] text-base mb-2"
                >
                  <Link
                    href={items.path}
                    className="is-active focus:text-primary-blue gap-1 p-1 flex items-center leading-3 cursor-pointer font-semibold hover:font-bold"
                  >
                    <label>{items.icon}</label>
                    <label className="p-1 text-white/80 leading-[25px]">{items.title} </label>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center">
          <Button className="w-1/2 bg-black/60 text-white/80  font-medium rounded" hasIcon={true} icon={<LogoutIcon />} text="Logout" handleClick={() => dispatch(logout())} />
        </div>
      </div>
    </>
  );
};
export default AdminSidenav;