interface Props{
    className ?: string,
    handleClick ?: () => void,
    text ?: string,
}

const Button = ({className, text, handleClick} : Props) => {
    return ( 
        <button className={`${className} grid place-content-center bg-primary-blue px-5 py-4` }  onClick={handleClick}>{text}</button>
     );
}
 
export default Button;