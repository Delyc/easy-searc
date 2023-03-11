import { useDispatch, useSelector } from "react-redux";
import { registerAdmin } from '../../../services/admin/actions/adminRegister'
import { useState, useEffect } from "react";
import { registerUser } from '../../../redux/actions/authActions'
import { useRouter } from "next/router";
import { AppDispatch } from '../../../redux/store'
import { ThunkDispatch } from 'redux-thunk';

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
        <section>

            <form>
                <input placeholder="org name" name="orgName" onChange={inputHandler} />
                <input placeholder="org phone" name="phone" onChange={inputHandler} />
                <input placeholder="org location" name="location" onChange={inputHandler} />
                <input placeholder="org email" name="email" onChange={inputHandler} />
                <input placeholder="org password" name="password" onChange={inputHandler} />

                <button onClick={handleSubmit}>send</button>
            </form>

        </section>
    );
}

export default RegisterAdmin;
