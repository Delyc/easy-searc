import { AdminFormItems } from "@/components/utils/data";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { SendIcon } from "@/components/svgs/Icons";
import { useAddDocMutation } from "@/services/admin/addDocSlice";
const AddDocument = () => {

    const initialData = {
        nameOnDoc: "",
        cardNumber: "",
        cardType: "",
        location: "",
        reqDocument: "",
        phoneEMail: ""
    }
    const [addDoc, setAddDoc] = useState(initialData)

    const inputHandler = (e: any) => {
        setAddDoc({ ...addDoc, [e.target.name]: e.target.value });
    }

    const [addDocument, {isLoading, isError}] = useAddDocMutation()

    const handleSubmit = async(e: any) => {
        e.preventDefault()
       await addDocument(addDoc).unwrap().then((payload) => {
        alert()
       })
       .catch((err) => [
        console.log(err)
       ])
    }

    return ( 
        <form className="flex flex-col gap-2 md:w-1/2 lg:w-2/5">
        {AdminFormItems.map((formItem, index) => {
            return (
                <div key={index} className="flex items-center px-5 rounded-md border border-gray-border">
                    {formItem.icon}
                    <Input placeHolder={formItem.placeHolder} type={formItem.type} handleChange={inputHandler} name={formItem.name} />
                </div>
            )
        })}
        <Button hasIcon={true} icon={<SendIcon />} text={`` ? "Sending ..." : "Send"} className="rounded text-white" handleClick={handleSubmit} />
    </form>
     );
}
 
export default AddDocument;