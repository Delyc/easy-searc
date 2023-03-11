import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { userLogin } from '../../../redux/actions/authActions'
import { useRouter } from "next/router";
import { ThunkDispatch } from 'redux-thunk';

const RegisterAdmin = () => {
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
        if (userInfo) router.push('/')
        // redirect user to login page if registration was successful
    }, [router, userInfo, success])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(userLogin(loginData))

    }
    return (
        <section>

            <form>
                <input placeholder="org email" name="email" onChange={inputHandler} />
                <input placeholder="org password" name="password" onChange={inputHandler} />

                <button onClick={handleSubmit}>send</button>
            </form>

        </section>
    );
}

export default RegisterAdmin;