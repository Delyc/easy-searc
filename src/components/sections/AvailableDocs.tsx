import { useAvailableDocsQuery } from "@/services/docsApiSlice";
import Navbar from "../layouts/Navbar";
import Document from "../cards/Doc";
import Doc from "../cards/Doc";
import { useState } from "react";
import SectionWrapper from "../wrappers/SectionWrapper";
const AvailableDocs = () => {


    const { data, isLoading, isError } = useAvailableDocsQuery()
  const [enteredWord, setEnteredWord] = useState("");

    console.log(data)
    const clearInpunt = () => {
        setEnteredWord("");
      };
    const filtered = data?.data.allDocuments.filter((value) => {
        return (
          value?.nameOnDoc
            .toString()
            .toLowerCase()
            .includes(enteredWord.toString().toLowerCase()) ||
          value?.cardType
            .toString()
            .toLowerCase()
            .includes(enteredWord.toString().toLowerCase()) ||
          value?.cardNumber
            .toString()
            .toLowerCase()
            .includes(enteredWord.toString().toLowerCase()) ||
          value?.location
            .toString()
            .toLowerCase()
            .includes(enteredWord.toString().toLowerCase()) ||
          value?.phoneEMail
            .toString()
            .toLowerCase()
            .includes(enteredWord.toString().toLowerCase()) ||
          value?.reqDocument
            .toString()
            .toLowerCase()
            .includes(enteredWord.toString().toLowerCase())
        );
      });

    // const docsArr = data.data.allDocuments
    // console.timeLog(docsArr)

    return (
        <>
            <Navbar />

     

        <SectionWrapper>
        <section className="flex flex-col gap-10 mt-20">

            <div className="flex justify-end">
                <input className="border  outline-none px-5 py-2 rounded" placeholder="Search ..." />
            </div>

            <h1 className="text-3xl text-dark-blue font-bold text-center">~ All Available Documents</h1>


            {isLoading && <h1>Loading ....</h1>}
            {isError && <h1>Something went wrong</h1>}
            <section className="grid grid-cols-3 gap-10 ">
            {data?.data.allDocuments.map((doc, index) => {
                return(
                    <Doc key={index} cardNumber={doc.cardNumber} cardType={doc.cardType} id={""} location={doc.location} nameOnDoc={doc.nameOnDoc} orgDocument={doc.orgDocument} phoneEMail={doc.phoneEMail} reqDocument={doc.reqDocument} />

                )
            })}
            </section>
        </section>
        </SectionWrapper>
        </>
    );
}

export default AvailableDocs;