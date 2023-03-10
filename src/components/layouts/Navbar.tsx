import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navItems = [
        {
            name: "Home",
            path: ""
        },
        {
            name: "Found doc",
            path: ""
        },
        {
            name: "Declare doc",
            path: ""
        },


    ]
    return (
        <header className="w-full border border-b top-0 fixed z-50 bg-white">
            <div className="bg-primary-blue py-3 px-6 xl:px-10 flex justify-end ">
                <Link href="/" className="text-white font-semibold uppercase">Organization Login</Link>
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="#0000000"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="#000000"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
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
                                <li className="text-dark-blue">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-dark-blue">
                                    <Link href="/blogs">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="text-dark-blue">
                                    <Link href="/about">
                                        About US
                                    </Link>
                                </li>
                                <li className="text-dark-blue">
                                    <Link href="/contact">
                                        Contact US
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <ul className="flex gap-10">
                    {navItems.map((navItem, index) => {
                        return(
                            <Link key={index} href={navItem.path}>{navItem.name}</Link>
                        )
                    })}
                </ul> */}

            </nav>
        </header>
    );
}

export default Navbar;