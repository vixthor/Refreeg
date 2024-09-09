import Header from "@/components/shared/Header";
import FormSwitcher from "@/components/groupForm";
export default function Page({searchParams}){
    const step = parseInt(searchParams.step) || 1; 
    console.log(step);
    return (
        <div className="">
            <Header/>
            <FormSwitcher step={step}/>
        </div>
    )
}