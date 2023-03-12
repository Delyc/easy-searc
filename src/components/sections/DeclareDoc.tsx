import { useDeclareLostDocMutation } from "@/services/docsApiSlice";
import { useState } from "react";
import Navbar from "../layouts/Navbar";
import { SideArrow } from "../svgs/Icons";
import Button from "../ui/Button";
import alerts from "../utils/Alert";
import man from '../../../public/assets/man.jpg'
import Image from "next/image";
import SectionWrapper from "../wrappers/SectionWrapper";
import { SendIcon } from "../svgs/Icons";
import Footer from "../layouts/Footer";
import Input from "../ui/Input";
import { formItems } from "../utils/data";
import { toast } from "react-toastify";
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
    const [errors, setErrors] = useState({
        names: "",
        cardNumber: ""
    })
    const inputHandler = (e: any) => {
        setDeclareDoc({ ...declareDoc, [e.target.name]: e.target.value });
        e.preventDefault();
        switch (e.target.name) {
            case "names":
                errors.names = e.target.value.length < 3 ? "Full names must e atleast 3 characters long" : ""
                break
            case "cardNumber":
                errors.cardNumber = e.target.value.length < 5 ? "Atleast 3 numbers" : ""
                break
            default:
                break
        }
        setErrors({...errors})
    }


    const validateForm = (errors: any) => {
        let valid = true
        Object.values(errors).forEach(
            (val: any) => val.length > 0 && (valid = false)
        )
        return valid

    }
    const [declareLostDoc, { isLoading, isError }] = useDeclareLostDocMutation()
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if(validateForm(errors)){
            await declareLostDoc(declareDoc).unwrap().then((payload) => {
                console.log("error", errors)
                alerts()
            })
                .catch((err) => {
                console.log("error", errors)
                    console.log(err)
                })
        }else{
            toast.error(Object.entries(errors).map(([key, value]) => {
                return value
            }).join("") || "Invalid form")
        }
        
    }


    return (
        <>
            <Navbar />
            <SectionWrapper>
                <section className="flex flex-col md:flex md:flex-row xl:justify-between lg:items-center mt-44 mb-20 md:mt-60 xl:mt-44 xl:px-32">
                    <div className="flex-col-reverse flex xl:flex-col gap-5  items-center">
                        <div className=" flex flex-col md:flex-col-reverse lg:flex lg:flex-row gap-2 items-center w-full justify-center">
                            <Image src={man} alt="man icon" className="lg:h-[60vh] w-full lg:w-[30rem]" />
                            <div className="animate-bounce flex gap-2 items-center">Fill out the form <SideArrow /> </div>
                        </div>
                        <h1 className="text-dark-blue font-bold text-2xl w-4/5 text-center">Lost your document? <span className="text-primary-blue">No Worries!</span></h1>
                        <p>Lost it ~ Declare it ~ get it</p>
                    </div>
                    <form className="flex flex-col gap-2 md:w-1/2 lg:w-2/5">

                        {formItems.map((formItem, index) => {
                            return (
                                <div key={index} className="flex items-center px-5 rounded-md border border-gray-border">
                                    {formItem.icon}
                                    {errors.names === formItem.name ? <span className='text-red-500 text-sm '>{errors.names}</span> : ""}
                                    <Input placeHolder={formItem.placeHolder} type={formItem.type} handleChange={inputHandler} name={formItem.name} />
                                </div>
                            )
                        })}
                        <Button hasIcon={true} icon={<SendIcon />} text={isLoading ? "Sending ..." : "Send"} className="rounded text-white" handleClick={handleSubmit} />
                    </form>
                </section>
            </SectionWrapper>
            <Footer />
        </>
    );
}

export default DeclareDoc;