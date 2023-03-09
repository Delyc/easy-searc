
interface Props{
    image: any;
    names: string;
    position: string
}
import Image from "next/image";
import { GithubIcon, GmailIcon, Linkedin } from "../svgs/Icons";
const TeamMember = ({image, names, position} : Props) => {
    return ( 
        <div className="shadow-xl rounded-md">
            <div className="relative w-full h-[30vh] ">
            <Image src={image} className="absolute rounded-md" alt="developer profile" layout="fill"/>
            </div>
            <div className="px-10 py-5 flex flex-col items-center">
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