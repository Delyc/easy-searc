import Link from "next/link";
import { useState } from "react";
import { Burger, CloseIcon } from "../svgs/Icons";
import { navItems } from "../utils/data";
import { useRouter } from "next/router";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const router = useRouter()

    return (
        <header className="w-full border border-b top-0 fixed z-50 bg-white">
            <div className="bg-primary-blue py-3 px-6 xl:px-10 flex justify-end ">
                <Link href="/login" className="text-white font-semibold uppercase">Organization Login</Link>
            </div>
            <nav className="w-full flex justify-between items-center">
                <div className="justify-between w-full px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="flex justify-between">
                        <div className="flex items-center justify-between  py-3 md:py-5 md:block w-full">
                            <div className="flex flex-col gap-2 items-center w-36">
                                <h1 className="text-4xl">e~Search</h1>
                                <p className="text-[12px] italic">Lost it  | claim it  | get it</p>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <CloseIcon />
                                    ) : (
                                        <Burger />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                {navItems.map((navItem, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={navItem.path} className={router.pathname === navItem.path ? 'text-dark-blue  font-bold text-xl hover:brightness-200' : 'text-dark-blue m-16 relative group'}>
                                               <span>
                                               {navItem.name}</span>
                                               <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-blue transition-all group-hover:w-full"></span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;