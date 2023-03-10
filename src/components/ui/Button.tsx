interface Props{
    className ?: string,
    handleClick ?: any,
    text ?: string,
    icon ? : any,
    hasIcon ?: boolean
}

const Button = ({className, text, handleClick, icon, hasIcon} : Props) => {
    return ( 
        <button className={`${className} ${hasIcon ? "flex gap-2 items-center justify-center" : "grid place-content-center"} bg-primary-blue px-5 py-4 font-bold` } onClick={handleClick}>{text}{icon}</button>
     );
}
 
export default Button;