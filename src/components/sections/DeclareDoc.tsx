import { useDeclareLostDocMutation } from "@/services/docsApiSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../layouts/Navbar";
import { AtIcon, GmailIcon, LocationIcon, PhoneIcon, ProfileIcon, SideArrow } from "../svgs/Icons";
import Button from "../ui/Button";
import alerts from "../utils/Alert";
import lostMan from '../../../public/assets/lost-man.svg'
import man from '../../../public/assets/man.jpg'
import Image from "next/image";
import SectionWrapper from "../wrappers/SectionWrapper";
import { SendIcon } from "../svgs/Icons";
import card from '../../../public/assets/card.svg'
import Footer from "../layouts/Footer";

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
                <section className="flex justify-between items-center mb-20 mt-44 px-32">
                    <div className="flex flex-col gap-5  items-center">
                        <div className=" flex gap-2 items-center w-full justify-center">
                            <Image src={man} alt="man icon" className="h-[60vh] w-[30rem]" />
                            <div className="animate-bounce flex gap-2 items-center">Fill out the form <SideArrow /> </div>

                        </div>
                        <h1 className="text-dark-blue font-bold text-2xl w-4/5 text-center">Lost your document? <span className="text-primary-blue">No Worries!</span></h1>

                        <p>Lost it ~ Declare it ~ get it</p>

                    </div>
                    <form className="flex flex-col gap-2 w-2/5">
                        <div className="flex items-center px-5 rounded-md border border-gray-border">
                            <ProfileIcon />
                            <input name="names" onChange={inputHandler} placeholder="Your names" type="text" className="w-full  p-3 bg-white outline-none  text-gray-text" />
                        </div>

                        <div className="flex  items-center px-5 rounded-md border border-gray-border ">
                            <PhoneIcon />
                            <input name="phone" onChange={inputHandler} placeholder="Phone number" type="number" className="w-full  p-3 bg-white outline-none text-gray-text" />

                        </div>
                        <div className="rounded-md border border-gray-border flex gap-2 items-center px-5">
                            <AtIcon />
                            <input name="email" onChange={inputHandler} placeholder="Email" type="email" className="w-full  p-3 bg-white outline-none text-gray-text" />

                        </div>

                        <div className="flex gap-2 px-5 items-center rounded-md border border-gray-border ">
                            <Image src={card} alt="Card" height={20} width={20} />

                            <input onChange={inputHandler} name="cardType" placeholder="Card type" type="text" className="w-full  p-3 bg-white outline-none text-gray-text" />

                        </div>
                        <div className="flex gap-2 px-5 items-center rounded-md border border-gray-border ">
                            <Image src={card} alt="Card" height={20} width={20} />

                            <input onChange={inputHandler} name="cardNumber" placeholder="Card type" type="text" className="w-full  p-3 bg-white outline-none text-gray-text" />

                        </div>
                        <div className="flex gap-2 items-center rounded-md border border-gray-border px-5">
                            <LocationIcon />
                            <input onChange={inputHandler} name="location" placeholder="Location" type="text" className="w-full  p-3 bg-white outline-none text-gray-text" />

                        </div>

                        <Button hasIcon={true} icon={<SendIcon />} text={isLoading ? "Sending ..." : "Send"} className="rounded text-white" handleClick={handleSubmit} />
                    </form>
                </section>
            </SectionWrapper>

            <Footer />
        </>

    );
}

export default DeclareDoc;