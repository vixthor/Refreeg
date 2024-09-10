import Header from "@/components/shared/Header";
import FormSwitcher from "@/components/groupForm";
import BookDrive from "./BookDrive";
import Footer from "../(root)/(home)/components/Footer";

export default function Page({ searchParams }) {
  const step = parseInt(searchParams.step) || null; // Default to null if no step is provided

  return (
    <div className="">
      <Header />
      {/* Conditionally show the FormSwitcher only if step is provided */}
      {step ? <FormSwitcher step={step} /> : <BookDrive />}
      <Footer />
    </div>
  );
}
