// DRIVE DATA (DO NOT DELETE)
import Header from "../../components/shared/Header";
import Link from "next/link";
import Footer from "../(root)/(home)/components/Footer";

// Completed By Nomso

export default function Page() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Support the Poor Initiative Ramadan drive
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl mb-6">
            At RefreeG, we believe that access to books, gadgets, money, and
            clothes is crucial in unlocking the potential of children and
            communities. Our Ramadan drive is dedicated to collecting and
            distributing books to those who need them most, from underfunded
            schools to community libraries in need of resources. Your
            contributions will make a tangible difference in the lives of
            children and learners around the world.
          </p>
          <Link href="/ramadandrive/whatareyoudonating">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center">
              Proceed to Donate
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          About Our Ramadan drive
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Why Donate */}
          <div className="flex-1 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-blue-500 text-3xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-2">Why Donate?</h3>
              <p className="text-gray-700">
                Books are a gateway to knowledge, imagination, and opportunity.
                Many children and communities face a lack of access to
                educational materials, stunting their growth and limiting their
                potential.
              </p>
            </div>
          </div>

          {/* Who Benefits */}
          <div className="flex-1 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-yellow-500 text-3xl mb-4">❓</div>
              <h3 className="text-xl font-bold mb-2">Who Benefits?</h3>
              <p className="text-gray-700">
                Your donations will go to children in need, community libraries,
                and schools. These beneficiaries are in dire need of books to
                improve literacy and support education efforts.
              </p>
            </div>
          </div>

          {/* What to Donate */}
          <div className="flex-1 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="text-green-500 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">What to Donate?</h3>
              <p className="text-gray-700">
                We accept children's books,gadget ,money,clothes, textbooks,
                novels, educational books, and more. Donating these books
                ensures they reach those who will use them to grow and expand
                their knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
