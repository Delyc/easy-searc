import Image from 'next/image';
import Button from '../ui/Button';
import SectionWrapper from '../wrappers/SectionWrapper';
import heroImage from '../../../public/assets/heroimage.png'
import Link from 'next/link';

const Hero = () => {
    return (
        <SectionWrapper>
            <section className='relative flex flex-col gap-10 md:flex md:flex-row xl:justify-between items-center mt-48 lg:mt-44'>
                <div className='w-full lg:w-1/2  flex flex-col gap-5 items-center'>
                    <h1 className='tracking-[1px] leading-[70px] text-5xl lg:text-6xl lg:leading-[80px] text-center font-bold text-dark-blue'>Upload, find and enjoy the service</h1>
                    <p className='tracking-[1px] text-gray-text'>Join us and enjoy the chasm</p>
                    <div className='flex flex-col lg:flex lg:flex-row gap-4 lg:gap-10 mt-4 lg:mt-10'>
                        <Link href="/available-docs">
                            <Button className='text-white rounded-full px-5 lg:px-12' text="Search document"/>
                        </Link>
                        <Link href="/register">
                            <Button className='border border-primary-blue px-14 bg-white rounded-full' text="Join Us"/>
                        </Link>
                    </div>
                </div>
                <div className="relative w-full h-[40vh] md:w-1/2 flex items-center md:h-[70vh]">
                    <Image src={heroImage} alt="Hero image" layout="fill" className='absolute h-1/2'/>
                </div>
            </section>
        </SectionWrapper>
    );
}
export default Hero;