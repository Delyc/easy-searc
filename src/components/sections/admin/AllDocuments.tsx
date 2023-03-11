import { useFetchDocsQuery } from "@/services/admin/addDocSlice";
import axios from 'axios'
import Doc from "@/components/cards/Doc";
import AvailableDocsSkeleton from "@/components/skeletons/AvailableDocsSkeleton";
const AllDocuments = () => {
const uid = localStorage.getItem("user")
    const {data, isLoading, isError} = useFetchDocsQuery()
    return ( 
        <>

        <section>
            <h1>All documents</h1>
            {isLoading && <AvailableDocsSkeleton />}
            {isError && <h1>Something went wrong</h1>}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {data?.data.allDocs.map((doc, index) => {
                return(
                    <Doc key={index} cardNumber={doc.cardNumber} cardType={doc.cardType} id={""} location={doc.location} nameOnDoc={doc.nameOnDoc} orgDocument={doc.orgDocument} phoneEMail={doc.phoneEMail} reqDocument={doc.reqDocument} />

                )
            })}
            </section>
        </section>
        </>
     );
}
 
export default AllDocuments;