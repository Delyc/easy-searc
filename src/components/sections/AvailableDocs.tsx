import { useAvailableDocsQuery } from "@/services/docsApiSlice";
import Navbar from "../layouts/Navbar";
import Doc from "../cards/Doc";
import Footer from "../layouts/Footer";
import { useState } from "react";
import SectionWrapper from "../wrappers/SectionWrapper";
import AvailableDocsSkeleton from "../skeletons/AvailableDocsSkeleton";
const AvailableDocs = () => {

  const { data, isLoading, isError } = useAvailableDocsQuery()
  const [enteredWord, setEnteredWord] = useState("");

  console.log("data", data)
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

  return (
    <>
      <Navbar />
      <SectionWrapper>
        <section className="flex flex-col gap-10 mt-28 mb-20">
          <div className="flex justify-end">
            <input className="border  outline-none px-5 py-2 rounded" placeholder="Search ..." />
          </div>
          <h1 className="text-3xl text-dark-blue font-bold text-center">~ All Available Documents</h1>
          {isLoading && <AvailableDocsSkeleton />}
          {isError && <h1>Something went wrong</h1>}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {data?.data.allDocuments.map((doc, index) => {
              return (
                <Doc key={index} cardNumber={doc.cardNumber} cardType={doc.cardType} id={""} location={doc.location} nameOnDoc={doc.nameOnDoc} orgDocument={doc.orgDocument} phoneEMail={doc.phoneEMail} reqDocument={doc.reqDocument} />
              )
            })}
          </section>
        </section>
      </SectionWrapper>
      <Footer />
    </>
  );
}
export default AvailableDocs;