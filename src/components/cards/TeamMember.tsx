
interface Props{
    image: any;
    names: string;
    position: string
}
import Image from "next/image";
import { GithubIcon, GmailIcon, Linkedin } from "../svgs/Icons";
const TeamMember = ({image, names, position} : Props) => {
    return ( 
        <div className=" flex flex-col items-center rounded-md">
            <div className="relative w-[13rem] h-[15rem] rounded-full ">
            <Image src={image} className="absolute  rounded-full" alt="developer profile" layout="fill"/>
            </div>
            <div className="lg:px-10 py-5 flex flex-col items-center">
            <p>{names}</p>
            <p className="text-primary-blue font-bold"> ~ <span className="text-gray-text font-normal">{position}</span> </p>
            <div className="flex justify-center gap-5 mt-5 w-full">
                <GithubIcon />
                <Linkedin />
                <GmailIcon />
            </div>
            </div>

        </div>
     );
}
 
export default TeamMember;