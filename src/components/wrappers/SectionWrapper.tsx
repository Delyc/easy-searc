interface Props{
    children: any
}

const SectionWrapper = ({children} : Props) => {
    return ( 
        <section className="mx-auto max-w-[80rem]">{children}</section>
     );
}
 
export default SectionWrapper;