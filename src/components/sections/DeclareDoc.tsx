import { useDeclareLostDocMutation } from "@/services/docsApiSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../layouts/Navbar";
import { SideArrow } from "../svgs/Icons";
import Button from "../ui/Button";
import alerts from "../utils/Alert";
import lostMan from '../../../public/assets/lost-man.svg'
import Image from "next/image";
import SectionWrapper from "../wrappers/SectionWrapper";
const DeclareDoc = () => {

    const initialData = {
        names: "",
        cardNumber: "",
        email: "",
        cardType: "",
        phone: "",
        location: ""
    }

    const [declareDoc, setDeclareDoc] = useState(initialData)

    const inputHandler = (e: any) => {
        setDeclareDoc({ ...declareDoc, [e.target.name]: e.target.value });
    }

    const [declareLostDoc, { isLoading, isError }] = useDeclareLostDocMutation()
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await declareLostDoc(declareDoc).unwrap().then((payload) => {
            console.log("payload", payload)
            alerts()

        })
            .catch((err) => {
                console.log(err)
            })

    }
    return (
        <>
            <Navbar />
            <SectionWrapper>
                <section className="flex justify-between items-center  mt-44 px-40">
                    <div className="flex flex-col gap-5 px-10 items-center">
                        <div className=" flex gap-2 items-center w-full justify-center">
                            <Image src={lostMan} alt="man icon" className="h-[60vh] w-[30rem]" />
                            <div className="animate-bounce flex gap-2 items-center">Fill out the form <SideArrow /> </div>
                       
                        </div>
                        <h1 className="text-dark-blue font-bold text-2xl w-4/5 text-center">Lost your document? <span className="text-primary-blue">No Worries!</span></h1>

                        <p>Lost it ~ Declare it ~ get it</p>

                    </div>
                    <form className="flex flex-col gap-2 w-2/5">
                        <input name="names" onChange={inputHandler} placeholder="Your names" type="text" className="w-full  p-3 bg-white rounded-md border border-gray-border  text-gray-text" />
                        <input name="phone" onChange={inputHandler} placeholder="Phone number" type="number" className="w-full  p-3 bg-white rounded-md border border-gray-border  text-gray-text" />
                        <input name="email" onChange={inputHandler} placeholder="Email" type="email" className="w-full  p-3 bg-white rounded-md border border-gray-border  text-gray-text" />
                        <input onChange={inputHandler} name="cardType" placeholder="Card type" type="text" className="w-full  p-3 bg-white rounded-md border border-gray-border  text-gray-text" />
                        <input onChange={inputHandler} name="cardNumber" placeholder="Card Number" type="number" className="w-full  p-3 bg-white rounded-md border border-gray-border  text-gray-text" />
                        <input onChange={inputHandler} name="location" placeholder="Location" type="text" className="w-full  p-3 bg-white rounded-md border border-gray-border  text-gray-text" />
                        <Button text={isLoading ? "Sedning ..." : "Send"} className="rounded text-white" handleClick={handleSubmit} />
                    </form>
                </section>
            </SectionWrapper>
        </>

    );
}

export default DeclareDoc;