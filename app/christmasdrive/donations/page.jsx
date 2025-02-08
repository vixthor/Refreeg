import Header from "../../../components/shared/Header";
import FormSwitcher from "../../../components/groupForm";
import Footer from "../../(root)/(home)/components/Footer";
import { saveBookDriveData } from "../../../lib/firebase/action";

export default function Page({ searchParams }) {
  const step = parseInt(searchParams.step) || 1;

  const submitForm = async (formData) => {
    "use server";
    try {
      await saveBookDriveData(formData);
    } catch (error) {
      console.error("Error saving Ramadan drive data: ", error);
    }
  };

  return (
    <div className="">
      <Header />
      {/* Conditionally show the FormSwitcher only if step is provided */}
      <FormSwitcher step={step} submitForm={submitForm} />

      <Footer />
    </div>
  );
}
