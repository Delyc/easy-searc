import { useFetchDocsQuery } from "@/services/admin/addDocSlice";
import AvailableDocsSkeleton from "@/components/skeletons/AvailableDocsSkeleton";
import AdminSidenav from "@/components/admin/adminWrapper/AdminSidenav";

const AllDocuments = () => {
    const { data, isLoading, isError } = useFetchDocsQuery()
    return (
        <>
            <section className="flex">
                <AdminSidenav />
                <div className="flex flex-col  w-full px-20 pt-28">
                        {isLoading && <AvailableDocsSkeleton />}
                        {isError && <h1>Something went wrong</h1>}
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Card name</th>
                                    <th>card type</th>
                                    <th>card number</th>
                                    <th>location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.data.allDocs.map((doc, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{doc.nameOnDoc}</td>
                                            <td>{doc.cardType}</td>
                                            <td>{doc.cardNumber}</td>
                                            <td>{doc.location}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                </div>
            </section>
        </>
    );
}
export default AllDocuments;

