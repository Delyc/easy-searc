import SectionWrapper from "../wrappers/SectionWrapper";

const ItemsInfo = () => {

    const items = ["Insurance card", "Passport", "National ID", "Driving licence","Student card", "Work card"]
    return ( 
        <SectionWrapper>
            <section className="mt-44 flex flex-col items-center">

                <p className="text-3xl text-dark-blue font-semibold w-1/4 text-center">We help you find any document with easy</p>
                <ul>
                    {items.map((item, index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                    })}
                    
                </ul>

                <p>And even more as long as the document has your details</p>

</section>
        </SectionWrapper>
        
     );
}
 
export default ItemsInfo;