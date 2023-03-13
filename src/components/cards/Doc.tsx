import { AtIcon, LocationIcon, ProfileIcon, RegDocIcon } from "../svgs/Icons";
import card from '../../../public/assets/card.svg'
import Image from "next/image";

const Doc = ({ nameOnDoc, location, phoneEMail, cardNumber, cardType, reqDocument }: any) => {
    return (
        <div className="shadow-xl px-4 xl:px-10 py-10 border flex flex-col gap-5 rounded-xl">
            <div className="flex flex-col gap-2">
                <p className="text-dark-blue font-semibold tracking-[1px] uppercase">Document details:</p>
                <div className="flex gap-3 items-center px-4">
                    <ProfileIcon />
                    <p>{nameOnDoc}</p>
                </div>
                <div className="flex gap-3 items-center px-4">
                    <Image src={card} alt="Card" height={20} width={20} />
                    <p>{cardType}</p>
                </div>
                <div className="flex gap-3 items-center px-4">
                    <Image src={card} alt="Card" height={20} width={20} />
                    <p>{cardNumber}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-dark-blue font-semibold tracking-[1px] uppercase">Required docs:</p>
                <div className="flex gap-3 items-center px-4">
                    <RegDocIcon />
                    <p>{reqDocument}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-dark-blue font-semibold tracking-[1px] uppercase">Contact:</p>
                <div className="flex gap-3 items-center px-4">
                    <AtIcon />
                    <p>{phoneEMail}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-dark-blue font-semibold tracking-[1px] uppercase">Pick it at:</p>
                <div className="flex gap-3 items-center px-4">
                    <LocationIcon />
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
}

export default Doc;