import { BookDonationForm } from "@/components/form"
import FormSwitcher from "@/components/groupForm";
import { FormProgressBar } from "@/components/progressBar"
export default function Page({searchParams}){
    const step = parseInt(searchParams.step) || 1; 
    console.log(step);
    return (
        <div className=" p-52">
            <FormSwitcher step={step}/>
        </div>
    )
}