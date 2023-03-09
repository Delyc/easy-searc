import Link from "next/link";

const Navbar = () => {

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
        <header className="py-4">
            <div className="bg-primary-blue py-3 px-10 flex justify-end ">
                <Link href="/" className="text-white font-semibold uppercase">Organization Login</Link>
            </div>
            <nav className="px-28 flex justify-between items-center">

                <div className="flex flex-col gap-2 items-center w-36">
                <h1 className="text-4xl">e~Search</h1>
                <p className="text-[12px] italic">Lost it  | claim it  | get it</p>
                </div>

                <ul className="flex gap-10">
                    {navItems.map((navItem, index) => {
                        return(
                            <Link key={index} href={navItem.path}>{navItem.name}</Link>
                        )
                    })}
                </ul>
              
            </nav>
        </header>
     );
}
 
export default Navbar;