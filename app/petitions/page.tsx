import { PetitionForm } from "../../components/petitionForm";


export default function PetitionsPage() {
    return (
        <div className=" max-w-xl mx-auto my-14 text-center space-y-4">
        <h1 className=" font-semibold text-4xl ">Get Dahiru Fired</h1>
        <p>None of the Information provided would be public knowledge
        {" Let’s"} get as many signatures as possible!</p>
        <PetitionForm />
        </div>
    );
}
