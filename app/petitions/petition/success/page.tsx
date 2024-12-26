import { socialLinks } from "../../../../constants";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { getTotalPetitionCount } from "../../../../lib/firebase/action";
import { Counter } from "../../../../components/counter";


export default async function PetitionsSuccessPage() {
const totalPetitionCount = await getTotalPetitionCount();
    return (
        <div className=" max-w-xl mx-auto my-14 text-center  space-y-4">
            <CheckCircle size={264} className=" mx-auto text-blue-900" />
            <p className=" text-2xl ">Your signature has been submitted successfully</p>
            <h1 className=" font-semibold text-4xl ">
                <span className="bg-gradient-to-t from-blut to-pink bg-clip-text text-transparent"><Counter start={0} end={totalPetitionCount} duration={.5}/> </span>
                Petition Submitted</h1>
            <div className="flex flex-col sm:flex-row sm:space-x-4 w-full items-center justify-center mb-8">
                <Link href={socialLinks.community}>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg mb-4 sm:mb-0 hover:bg-blue-600">
                        Join our Community
                    </button>
                </Link>
                <Link href="/">
                    <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400">
                        Continue to Homepage
                    </button>
                </Link>
            </div>
        </div>
    );
}