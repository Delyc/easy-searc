import Testimony from "../cards/Testimony";
import SectionWrapper from "../wrappers/SectionWrapper";

const Testimonies = () => {
    return (
        <SectionWrapper>
            <section className='my-28'>
                <div >
                    <div className="mb-8 text-center">
                        <h2 className="text-4xl font-bold text-dark-blue">Testimonials</h2>
                        <p className="mt-2 text-gray-text tracking-[0.8px]">What others say about us</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-20">
                    <Testimony />
                    <Testimony />
                    <Testimony />
                </div>
            </section>
        </SectionWrapper>

    );
}

export default Testimonies;