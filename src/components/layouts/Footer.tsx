import SectionWrapper from "../wrappers/SectionWrapper"
export default function Footer(){
    return(
        <>
        <footer className="w-full">
            <section className="bg-dark-blue w-full px-8 py-10 ">
       
                <div className="mx-auto max-w-[80rem]">
                
                <div className='flex justify-between xl:mx-auto xl:max-w-[80%]'>
                <h3 className="text-white font-bold">Easy Search</h3>
                </div>

                <div className='h-[0.5px] bg-line-blue mt-5 xl:mx-auto xl:max-w-[80%]'/>

                <div className='grid grid-cols-1 gap-8 py-8 md:grid-cols-3 xl:mx-auto xl:max-w-[80%]'>
                    <article className='flex flex-col gap-3 items-start'>
                        <p className='text-white font-bold'>Company Info</p>
                        <ul className='text-footer-gray flex flex-col gap-2'>
                            <li  className='text-start'>About Us</li>
                            <li className='text-start'>Blog</li>
                        </ul>

                    </article>
                    <article className='flex flex-col gap-3 items-start'>
                        <p className='text-white font-bold'>Quick links</p>
                        <ul className='text-footer-gray flex flex-col gap-2'>
                        <li  className='text-start'>About Us </li>

                        <li  className='text-start'>Contact Us</li>

                            <li  className='text-start'>Add Item </li>
                            <li className='text-start'>Available items</li>
                        </ul>

                    </article>
                    <article className='flex flex-col gap-3 items-start'>
                        <p className='text-white font-bold'>Features</p>
                        <ul className='text-footer-gray flex flex-col gap-2'>
                            <li  className='text-start'>Finding lost Items</li>
                            <li className='text-start'>Publishing lost Items</li>
                        </ul>

                    </article>

                </div>
                </div>
                
            </section>
            <section className="bg-primary-blue px-8 py-5 ">
                <div  className='xl:mx-auto xl:max-w-[80rem]'>
                <p className='text-white text-start'>Made by  Easy serach  All Right Reserved </p>
                </div>
            </section>

        </footer>
        
        </>
    )
}