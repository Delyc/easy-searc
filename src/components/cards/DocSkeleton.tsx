import { AtIcon, LocationIcon, ProfileIcon, RegDocIcon } from "../svgs/Icons";
import card from '../../../public/assets/card.svg'
import Image from "next/image";
import Button from "../ui/Button";

const DocSkeleton = () => {
    return ( 
        <div className="shadow-xl px-4 xl:px-10 py-10 flex flex-col gap-5 rounded-xl">

        <div className="flex flex-col gap-2">
            <p className="text-dark-blue font-semibold tracking-[1px] uppercase">Document details:</p>
            <div className="flex gap-3 items-center px-4">
                <ProfileIcon />
                <p className="bg-gray-200 py-3 w-full animate-pulse rounded-xl"></p>
            </div>
            <div className="flex gap-3 items-center px-4">
                <Image src={card} alt="Card" height={20} width={20} />
                <p className="bg-gray-200 py-3 w-full animate-pulse rounded-xl"></p>
        
            </div>
            <div className="flex gap-3 items-center px-4">
                <Image src={card} alt="Card" height={20} width={20} />
                <p className="bg-gray-200 py-3 w-full animate-pulse rounded-xl"></p>
            </div>
        </div>
        
        <div className="flex flex-col gap-2">
            <p className="text-dark-blue font-semibold tracking-[1px] uppercase">Required docs:</p>
            <div className="flex gap-3 items-center px-4">
                <RegDocIcon />
                <p className="bg-gray-200 py-3 w-full animate-pulse rounded-xl"></p>
            </div>
        </div>
        
        <div className="flex flex-col gap-2">
            <p className="text-dark-blue font-semibold tracking-[1px] uppercase">Contact:</p>
        
        
        
            <div className="flex gap-3 items-center px-4">
                <AtIcon />
                <p className="bg-gray-200 py-3 w-full animate-pulse rounded-xl"></p>
            </div>
        </div>
        
        <div className="flex flex-col gap-2">
            <p className="text-dark-blue font-semibold tracking-[1px] uppercase">Pick it at:</p>
        
            <div className="flex gap-3 items-center px-4">
                <LocationIcon />
                <p className="bg-gray-200 py-3 w-full animate-pulse rounded-xl"></p>
            </div>
        </div>
        
        
        
        
        {/* <Button text="Claim" className="text-white rounded py-2 mt-5 w-1/2" /> */}
        </div>
     );
}
 
export default DocSkeleton;