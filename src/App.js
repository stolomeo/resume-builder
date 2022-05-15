import "./App.css";
import PersonalForm from "./components/Personal/PersonalForm";
import ExperienceForm from "./components/Experience/ExperienceForm";
import EducationForm from "./components/Education/EducationForm";
import Personal from "./components/Personal/Personal";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

function App() {
  return (
    <main>
      <div className="form-container">
        <PersonalForm />
        <ExperienceForm />
        <EducationForm />
      </div>
      <div className="resume-container">
        <Personal />
        <Experience />
        <Education />
      </div>
    </main>
  );
}

export default App;
