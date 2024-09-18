import Header from "@/components/shared/Header";
import FormSwitcher from "@/components/groupForm";
import Footer from "../../(root)/(home)/components/Footer";


export default function Page({ searchParams }) {
  const step = parseInt(searchParams.step) || 1; // Default to null if no step is provided

  return (
    <div className="">
      <Header />
      {/* Conditionally show the FormSwitcher only if step is provided */}
      <FormSwitcher step={step} /> 
    
      <Footer />
    </div>
  );
}
