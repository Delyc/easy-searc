import { useFetchDocsQuery } from "@/services/admin/addDocSlice";
import axios from 'axios'
const AllDocuments = () => {
const uid = localStorage.getItem("user")
    const {data} = useFetchDocsQuery()
    return ( 
        <>

        <section>
            <h1>All documents</h1>
        </section>
        </>
     );
}
 
export default AllDocuments;