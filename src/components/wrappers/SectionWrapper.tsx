interface Props{
    children: any
}

const SectionWrapper = ({children} : Props) => {
    return ( 
        <section className="mx-auto xl:max-w-[80rem] px-6 xl:px-0">{children}</section>
     );
}
 
export default SectionWrapper;