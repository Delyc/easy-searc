import hero from '../../../public/assets/hero1.webp'
import Image from 'next/image';
import Button from '../ui/Button';
import SectionWrapper from '../wrappers/SectionWrapper';

const Hero = () => {
    return ( 
        <SectionWrapper>
        <section className='relative flex justify-between items-center mt-20'>
            <div className='w-1/2  flex flex-col gap-5 items-center'>
                <h1 className='tracking-[1px] text-6xl leading-[80px] text-center font-bold text-dark-blue'>Upload find and enjoy the service</h1>
                <p className='tracking-[1px] text-gray-text'>Join us and enjoy the chasm</p>
                <div className='flex gap-10 mt-10'>
                    <Button className='text-white rounded-full px-12'  text="Search document"/>
                    <Button className='border border-primary-blue px-14 bg-white rounded-full'  text="Join Us"/>
                </div>
            </div>
            <div className="relative w-2/5 flex items-center h-[40vh]">
            <Image src={hero} alt="Hero image" layout="fill" className='absolute h-1/2' />

            </div>
        </section>   
        </SectionWrapper>
     );
}
 
export default Hero;