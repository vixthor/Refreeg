import Image from "next/image"
import { partners } from "@/constants"

const Partners = ({src,alt,title})=>{
    return(
        <div>
            <Image src={src} alt={alt} width={200} height={200} />
            <h5 className=" font-bold text-xl">{title}</h5>
           
        </div>
    )
}

const OurPartners = () => {
    return (
        <section className='w-full h-full md:px-[50px] px-[10px] py-[15px] md:py-[25px] mt-0 md:mt-10' id='about'>

            <p className='text-center text-[#A19F9F] text-[32px] md:text-[60px] font-semibold'>Our Partners.</p>
            <div className='w-[150px] md:w-[250px] h-[8px] rounded-[20px] bg-accent mx-auto' />

            <div className=" flex flex-wrap items-center justify-center gap-5">
               {
                     partners.map((partner,index)=>{
                          return <Partners key={index} src={partner.src} alt={partner.alt} title={partner.title} />
                     })
               } 
            </div>
        </section>
    )
}

export default OurPartners