interface Props{
    type: string,
    placeHolder: string,
    handleChange: any,
    name: string,
    className ?: string
}

const Input  = ({type, placeHolder, handleChange, name, className} : Props) => {
    return ( 
        <input type={type} placeholder={placeHolder} onChange={handleChange} name={name} className={`${className} w-full  p-3 bg-white outline-none text-gray-text`}/>
    )
}
 
export default Input ;