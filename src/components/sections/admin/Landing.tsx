import withAuth from "@/components/helpers/withAuth";
import AdminSidenav from "@/components/admin/adminWrapper/AdminSidenav";
import { useFetchDocsQuery } from "@/services/admin/addDocSlice";

const Landing = () => {
  const { data } = useFetchDocsQuery()
  return (
    <>
      <section className=" flex gap-20">
        <AdminSidenav />
        <div className="flex flex-col  w-full  items-center">
          <div className="mt-[90px] w-4/5  border py-11 rounded-[5px]">
            <h4 className="text-[20px] pl-[4em] text-[#1b173f] font-medium">
              DASHBOARD
            </h4>
          </div>
          <div className="mt-4 w-4/5 border h-[23em] rounded-[5px]">
            <div className="bg-[#F7F7F8] border border-[#638AFF] my-[3em] mx-[15em] h-[16em] rounded-[7px] text-center">
              <div className="my-[4em]">
                <h2 className="text-[28px] mb-6 text-[#1b173f] font-medium">
                  Welcome to your Dashboard
                </h2>
                <h3 className="text-[22px] mb-6 text-[#1b173f] font-normal">
                  <span className="font-medium">{data?.data.allDocs.length}</span> documents in Total
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default withAuth(Landing);