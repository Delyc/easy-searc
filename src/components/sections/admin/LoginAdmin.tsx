import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { userLogin } from '../../../redux/actions/authActions'
import { useRouter } from "next/router";
import { ThunkDispatch } from 'redux-thunk';
import { toast } from "react-toastify";
import Navbar from "@/components/layouts/Navbar";
import SectionWrapper from "@/components/wrappers/SectionWrapper";
import Footer from "@/components/layouts/Footer";
import { orgLoginForm } from "@/components/utils/data";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import login from '../../../../public/assets/login.png'
import Image from "next/image";
const LoginAdmin = () => {
    const initialData = {
        email: '',
        password: ''
    }
    const router = useRouter()
    const [loginData, setLoginData] = useState<any>(initialData)
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
        if (userInfo) {
            toast.info("Logged in successfully")
            router.push('/')
        }
        // redirect user to login page if registration was successful
    }, [router, userInfo, success])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(userLogin(loginData))

    }
    return (
        <>
            <Navbar />
            <SectionWrapper>
                <section className="mt-44 md:flex md:flex-row justify-between lg:px-20 mb-28">
                    <div>
                        <h1 className="text-gray-text tracking-[1px]">Welcome</h1>
                        <h1 className="text-5xl text-primary-blue font-medium"> Back!</h1>
                        <div className="relative w-full h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[20rem]">
                            <Image src={login} alt="login" layout="fill" className="absolute" />
                        </div>
                    </div>
                    <form className="flex flex-col gap-3 bg-white shadow-xl px-4 lg:px-16 py-16 mt-5 lg:w-2/5">
                        <h1 className="text-gray-text tracking-[1px]">Login here</h1>
                        {orgLoginForm.map((input, index) => {
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

export default LoginAdmin;