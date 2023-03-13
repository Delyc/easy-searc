interface Props{
    image : any,
    head: string,
    description: string
}

import Image from "next/image"

export default function SearchStep({image, head, description} : Props){
    return(
        <>
        <article className="flex flex-col gap-2 shadow-xl border border-gray-border rounded-lg py-6 px-6 xl:px-8 transform transition duration-500 hover:scale-125">
            <div className="flex gap-3 items-center">
            <Image className="w-8 h-8" src={image} width={20} height={20} alt="Step icon"/>
            <h3 className="text-dark-blue font-medium">{head}</h3>
            </div>
        
            <p className="text-start text-gray-text xl:text-[17px]">{description}</p>

        </article>
        </>
    )
}