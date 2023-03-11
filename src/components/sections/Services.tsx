import SectionWrapper from "../wrappers/SectionWrapper";
import one from '../../../public/assets/lost.jpg'
import Image from 'next/image'
const Services = () => {

    const docs = ["National ID", "Passport", "Insurance card", "Student card", "Bank card", "..."]
    return (
        <>
            <section className="bg-gray-50 py-5 mt-20">
                <SectionWrapper>
                    <section className="lg:px-8 py-3 mt-10 flex flex-col items-center gap-5 xl:mx-auto xl:max-w-[80%] ">
                        <h2 className="font-bold text-dark-blue text-center text-4xl">Our Services</h2>
                        <p className="text-gray-text md:w-3/5 text-center tracking-[0.8px]">Don{"'"}t remember where you left your documents? Worry less! With our application e~Search, we help you get back your decuments in no time</p>
                        <div className="flex flex-col gap-10 md:flex  md:flex-row items-center">
                            <div className="relative w-full h-[30vh] md:h-80 md:w-80">
                                <Image src={one} alt="one" layout="fill" className="absolute" />
                            </div>
                            <div className="flex flex-col gap-2">
                                {docs.map((doc, index) => {
                                    return (
                                        <p key={index} className="flex gap-2 items-center text-dark-blue font-medium tracking-[1px] "><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M21.2505 5.77V9C21.2505 11.29 20.5205 12.02 18.2305 12.02H18.1305V10.38C18.1305 7.26 16.7405 5.87 13.6205 5.87H11.9805V5.77C11.9805 3.48 12.7105 2.75 15.0005 2.75H18.2305C20.5205 2.75 21.2505 3.48 21.2505 5.77Z" fill="#292D32" />
                                            <path d="M16.6291 10.3801V13.6201C16.6291 15.9001 15.8991 16.6301 13.6191 16.6301H10.3791C8.09914 16.6301 7.36914 15.9001 7.36914 13.6201V10.3801C7.36914 8.10013 8.09914 7.37012 10.3791 7.37012H13.6191C15.8991 7.37012 16.6291 8.10013 16.6291 10.3801Z" fill="#292D32" />
                                            <path opacity="0.4" d="M12.02 18.13V18.23C12.02 20.52 11.29 21.25 9 21.25H5.77C3.48 21.25 2.75 20.52 2.75 18.23V15C2.75 12.71 3.48 11.98 5.77 11.98H5.87V13.62C5.87 16.74 7.26 18.13 10.38 18.13H12.02Z" fill="#292D32" />
                                        </svg>{doc}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </section >
                </SectionWrapper>
            </section>
        </>
    );
}
export default Services;