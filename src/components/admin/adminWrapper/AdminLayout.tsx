import Navbar from "@/components/layouts/Navbar";
import AdminSidenav from "./AdminSidenav";

const AdminLayout = ({children} : any) => {
    return ( 
        <section className="flex flex-col gap-44">
            {/* <Navbar /> */}
            <AdminSidenav />

            <section>
                {children}
            </section>
        </section>
     );
}
 
export default AdminLayout;