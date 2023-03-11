import { useFetchDocsQuery } from "@/services/admin/addDocSlice";
import axios from 'axios'
import Doc from "@/components/cards/Doc";
import { useDispatch } from "react-redux";
import AvailableDocsSkeleton from "@/components/skeletons/AvailableDocsSkeleton";
import { ThunkDispatch } from 'redux-thunk';
import AdminSidenav from "@/components/admin/adminWrapper/AdminSidenav";
import { setCardType, setCompleteDoc } from '../../../redux/reducers/adminDocsSlice'
const AllDocuments = () => {
    const { data, isLoading, isError } = useFetchDocsQuery()
    const dispatch: ThunkDispatch<any, void, any> = useDispatch()
    dispatch(setCardType("hello"))


    return (
        <>
            <section className=" flex gap-20">
                <AdminSidenav />

                <div className="flex flex-col  w-full px-20  items-center">


                        <h1>All documents</h1>
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
                                        // <Doc key={index} cardNumber={doc.cardNumber} cardType={doc.cardType} id={""} location={doc.location} nameOnDoc={doc.nameOnDoc} orgDocument={doc.orgDocument} phoneEMail={doc.phoneEMail} reqDocument={doc.reqDocument} />

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

