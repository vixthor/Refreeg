import Banner from '@/components/Banner'
import Button from '@/components/shared/Button'
import React from 'react'

const HowWeEnsureTransparency = () => {
  return (
//     <section className='w-full h-full mt-10 py-[200px]'>
        
//     <div className="py-[120px] px-[50px] bg-secondary-3">
//         <p className='text-[20px] font-semibold text-light'>How do we ensure transparency?</p>
//         <p className='text-[15px] text-light pt-[40px]'>
//         At RefreeG, transparency is at the core of our operations. We utilize blockchain technology to provide an immutable and transparent 
//         record of all transactions. Here’s how we ensure transparency:
//         </p>
//         <ul className='pb-[40px] text-light text-[15px] list-decimal'>
//             <li>Blockchain Integration: Every donation and disbursement is recorded on the blockchain, creating a public ledger accessible to all stakeholders. This ensures that funds are tracked and cannot be altered retroactively.</li>
//             <li>Real-Time Tracking: Donors can track their contributions in real-time, from donation to final allocation, providing assurance that funds are used as intended.</li>
//             <li>Detailed Reporting: We offer comprehensive reports on the use of funds, project outcomes, and the impact created. These reports are made publicly available, ensuring accountability.</li>
//             <li>Third-Party Audits: Regular audits by independent third parties verify the accuracy and integrity of our financial records and processes.</li>
//             <li>User Verification: Both donors and recipients undergo a verification process to ensure legitimacy and prevent fraud.</li>
//         </ul>

//             <div className="flex space-x-3 items-center">
//                 <p className='text-light'>Want to be part of us?</p>
//             <Button variant={"textwhite"}>
//                 Join Our Community
//             </Button>
//             </div>
//     </div>
// </section>
        <Banner title={"How do we ensure transparency?"} bg={"bg-secondary-3"}> 
               At RefreeG, transparency is at the core of our operations. We utilize blockchain technology to provide an immutable and transparent 
                       record of all transactions. Here’s how we ensure transparency:

                    <ul className='pb-[40px] pl-[15px] text-light text-[15px] list-decimal'>
                       <li>Blockchain Integration: Every donation and disbursement is recorded on the blockchain, creating a public ledger accessible to all stakeholders. This ensures that funds are tracked and cannot be altered retroactively.</li>
                       <li>Real-Time Tracking: Donors can track their contributions in real-time, from donation to final allocation, providing assurance that funds are used as intended.</li>
                       <li>Detailed Reporting: We offer comprehensive reports on the use of funds, project outcomes, and the impact created. These reports are made publicly available, ensuring accountability.</li>
                       <li>Third-Party Audits: Regular audits by independent third parties verify the accuracy and integrity of our financial records and processes.</li>
                       <li>User Verification: Both donors and recipients undergo a verification process to ensure legitimacy and prevent fraud.</li>
        </ul>
                       
        </Banner>
  )
}

export default HowWeEnsureTransparency