import { useDeclareLostDocMutation } from "@/services/docsApiSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../layouts/Navbar";
import Button from "../ui/Button";
import alerts from "../utils/Alert";
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

        <SectionWrapper>
            <section className="flex justify-between items-center">
                <div>
                    <h1>Lost your document? <span>No Worries!</span></h1>
                    <p>With our e~Search, you can get bac your document in no time</p>
                    <p>Lost it ~ Claim it ~ get it</p>

                    <div>Fill out the form</div>
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
    );
}

export default DeclareDoc;