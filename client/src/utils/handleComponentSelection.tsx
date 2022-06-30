import Education from "../components/ResumeForm/Education/Education";
import Experience from "../components/ResumeForm/Experience/Experience";
import PersonalForm from "../components/ResumeForm/Personal/PersonalForm";
import Projects from "../components/ResumeForm/Projects/Projects";
import Skills from "../components/ResumeForm/Skills/Skills";

export const handleComponentSelection = (count: number) => {
  if (count === 20) {
    return <PersonalForm />;
  } else if (count === 40) {
    return <Education />;
  } else if (count === 60) {
    return <Skills />;
  } else if (count === 80) {
    return <Projects />;
  } else if (count === 100) {
    return <Experience />;
  }
};
