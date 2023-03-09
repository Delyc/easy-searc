import SearchStep from "../cards/SearchSteps";
import details from '../../../public/assets/details.png'
import upload from '../../../public/assets/upload.png'
import notify from '../../../public/assets/notify.png'
import SectionWrapper from "../wrappers/SectionWrapper";
const HowToSearch = () => {
    return (
        <SectionWrapper>
               <section className="px-8 py-3  flex flex-col items-center gap-5 xl:mx-auto xl:max-w-[80%] mt-44">
            <h2 className="font-bold text-dark-blue text-center text-4xl">How to Search</h2>
            <p className="text-gray-text md:w-3/5 text-center tracking-[0.8px]">Easy Search allows you to upload the details of your lost document and search it for
                you in just 3 easy and quick ways </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:mt-10 ">
                <SearchStep image={details} head="Details" description="User insert full details of the lost 
document or a card."/>
                <SearchStep image={upload} head="Upload" description="User insert full details of the lost 
document or a card."/>
                <SearchStep image={notify} head="Notify" description="User insert full details of the lost 
document or a card."/>
            </div>
        </section>
        </SectionWrapper>
    );
}

export default HowToSearch;