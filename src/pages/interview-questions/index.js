import ContactForm from "../../components/ContactForm";
import AgeCalculator from "../../components/AgeCalculator";
import ChipsInput from "../../components/ChipsInput";
import MultiSelectDropdown from "../../components/MultiSelectDropdown";
import ListSorter from "../../components/ListSorter";

const InterviewQuestionsPage = () => {
  return (
    <div className="p-4">
      <ChipsInput />
      <AgeCalculator />
      <ContactForm />
      <MultiSelectDropdown />
      <ListSorter />
    </div>
  );
};

export default InterviewQuestionsPage;
