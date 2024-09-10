import Header from "@/components/shared/Header";
import FormSwitcher from "@/components/groupForm";
import Footer from "../../(root)/(home)/components/Footer";
import ThankYou from "./ThankYou";
export default function Page({searchParams}){
    const step = parseInt(searchParams.step) || 1; 
    console.log(step);
    return (
        <div className="">
            <Header/>
            <ThankYou />

            <FormSwitcher step={step}/>
        </div>
    )
}