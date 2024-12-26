import Link from "next/link";

export default function Home() {
    return (
        <div className="px-[10px] md:px-[50px] space-y-5 my-10">
            <h1 className=" font-semibold text-5xl">Petitions</h1>
            <p>make your voice heard and support a cause</p>
            <div className="max-w-[300px] h-[500px] ">
                <div className=" bg-red-800 text-white text-5xl text-center p-5 rounded-tr-2xl rounded-tl-2xl"> Get Dahiru Fired</div>
                <div className=" p-4 shadow-xl rounded-b-2xl">
                    <p>This petition is calling for justice and accountability. Together, we can create changeAdd your voice by signing today and be a part of the solution</p>
                    <Link href={'/petitions/petition'}><button className="bg-blue-500 text-white p-2 rounded-md w-full mt-3">Sign Petition </button></Link>
                </div>
            </div>
        </div>
    )
}