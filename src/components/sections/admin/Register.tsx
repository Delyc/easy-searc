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
    const inputHandler = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setLoginData({ ...loginData, [name]: value })
        e.preventDefault()
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
        await dispatch(registerUser(loginData))

    }
    return (
        <>
        <Navbar />
        <SectionWrapper>
            <section className="mt-44 flex justify-between px-20 mb-28">
            <div className="">
                <h1 className="text-gray-text tracking-[1px]">Welcome to</h1>
                <h1 className="text-5xl text-primary-blue font-medium"> e~Search!</h1>
                <div className="relative  w-[30rem] h-[30rem]">
                <Image src={register} alt="man icon" layout="fill" className="absolute"/>

                </div>
            </div>
            <form className="flex flex-col gap-3 bg-white shadow-xl px-16 py-16 mt-5 w-2/5">
                {orgRegisterForm.map((input, index) => {
                    return(
                        <div key={index} className="flex items-center px-5 rounded-md border border-gray-border">
                                    {input.icon}
                                    <Input placeHolder={input.placeHolder} type={input.type} handleChange={inputHandler} name={input.name} />
                                </div>
                    )

                })}

                <Button handleClick={handleSubmit} text="send" className="text-white"/>
            </form>
            </section>
        </SectionWrapper>
        <Footer />
        </>
    );
}

export default RegisterAdmin;
