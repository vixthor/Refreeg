import Banner from '@/components/Banner'
import React from 'react'

const EffortToMakeABetterNation = () => {
  return (
    <Banner title={"Do you want to be part of the effort to make a better nation?"} bg={"bg-secondary-3"} footer={true}> 

    At RefreeG, we believe in the power of community and collective action to bring about meaningful change. We invite you to join us in our mission to empower 
    less privileged individuals and foster socio-economic growth across Africa. By becoming a part of our community, you can:

         <ol className='pb-[40px] pl-[15px] text-light text-[15px] list-disc'>
            <li>Support Vital Causes: Contribute to initiatives that provide vocational training, support for GBV victims, education, and basic necessities to those in need.</li>
            <li>Ensure Transparency: Through our use of blockchain technology, you can track your donations in real-time and see the tangible impact of your contributions.</li>
            <li>Be a Catalyst for Change: Your involvement can help build sustainable African communities, improving lives and creating a brighter future for all.</li>
        </ol>

        <p className='text-[15px] text-light'><span className='font-bold mt-6'>
        Join us today {" "}
            </span> 
            and be a part of the movement towards a better, more equitable nation. Together, we can make a lasting difference.</p>

            
        </Banner>
  )
}

export default EffortToMakeABetterNation