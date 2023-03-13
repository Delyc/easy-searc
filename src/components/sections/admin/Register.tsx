import { useDispatch, useSelector } from "react-redux";
import { registerAdmin } from '../../../services/admin/actions/adminRegister'
import { useState, useEffect } from "react";
import { registerUser } from '../../../redux/actions/authActions'
import { useRouter } from "next/router";
import { AppDispatch } from '../../../redux/store'
import { ThunkDispatch } from 'redux-thunk';
import Image from "next/image";
import register from '../../../../public/assets/register-org.svg'
import SectionWrapper from "@/components/wrappers/SectionWrapper";
import Navbar from "@/components/layouts/Navbar";
import Input from "@/components/ui/Input";
import { orgRegisterForm } from "@/components/utils/data";
import Button from "@/components/ui/Button";
import Footer from "@/components/layouts/Footer";
import { toast } from "react-toastify";
interface LoginPayload {
    email: string,
    password: string
}

interface RegisterPayload {
    orgName: string,
    phone: string,
    location: string,
    email: string,
    password: string
}

const RegisterAdmin = () => {

    const initialData: RegisterPayload = {
        orgName: '',
        phone: '',
        location: '',
        email: '',
        password: ''
    }

    const router = useRouter()
    const [loginData, setLoginData] = useState(initialData)
    const [errors, setErrors] = useState({
        orgName: '',
        phone: '',
        location: '',
        email: '',
        password: ''
    })
    const inputHandler = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setLoginData({ ...loginData, [name]: value })
        e.preventDefault()
        switch (name) {
            case " orgName":
                errors.orgName = value === "" ? "Please provide organisation name" : ""
                break
            default: break
        }
        setErrors({ ...errors })
    }

    const validateForm = (errors: any) => {
        let valid = true
        Object.values(errors).forEach(
            (val: any) => val.length > 0 && (valid = false)
        )
        return valid
    }
    const { loading, userInfo, error, success } = useSelector(
        (state: any) => state.auth
    )

    const dispatch: ThunkDispatch<any, void, any> = useDispatch()

    useEffect(() => {
        // redirect authenticated user to profile screen
        if (userInfo) router.push('/')
        // redirect user to login page if registration was successful
        if (success) router.push('/login')
    }, [router, userInfo, success])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if(validateForm(errors)){
            await dispatch(registerUser(loginData))
        } else{
            toast.error(Object.entries(errors).map(([key, value]) => {
                return value
            }).join("") || "Invalid form")
        }

    }
    return (
        <>
            <Navbar />
            <SectionWrapper>
                <section className="mt-44 md:flex md:flex-row justify-between lg:px-20 mb-28">
                    <div className="">
                        <h1 className="text-gray-text tracking-[1px]">Welcome to</h1>
                        <h1 className="text-5xl text-primary-blue font-medium"> e~Search!</h1>
                        <div className="relative h-[15rem] w-full md:w-[20rem] md:h-[20rem]  lg:w-[30rem] lg:h-[30rem]">
                            <Image src={register} alt="man icon" layout="fill" className="absolute" />
                        </div>
                    </div>
                    <form className="flex flex-col gap-3 bg-white shadow-xl px-4 lg:px-16 py-16 mt-5 lg:w-2/5">
                {errors.orgName && <span className='text-red-500 text-sm'>{errors.orgName}</span>}
                    
                        {orgRegisterForm.map((input, index) => {
                            return (
                                <div key={index} className="flex items-center px-5 rounded-md border border-gray-border">
                                    {input.icon}
                                    <Input placeHolder={input.placeHolder} type={input.type} handleChange={inputHandler} name={input.name} />
                                </div>
                            )
                        })}

                        <Button handleClick={handleSubmit} text="send" className="text-white" />
                    </form>
                </section>
            </SectionWrapper>
            <Footer />
        </>
    );
}
export default RegisterAdmin;
