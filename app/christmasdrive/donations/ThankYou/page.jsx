import Header from "../../../../components/shared/Header";
import FormSwitcher from "../../../../components/groupForm";
import Footer from "../../../(root)/(home)/components/Footer";
import ThankYou from "./ThankYou";
export default function Page({searchParams}){

    return (
        <div className="">
            <Header/>
            <ThankYou />
            <Footer/>
        </div>
    )
}