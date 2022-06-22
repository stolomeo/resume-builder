import Education from "../components/DevForm/Education/Education";
import Experience from "../components/DevForm/Experience/Experience";
import PersonalForm from "../components/DevForm/Personal/PersonalForm";
import Projects from "../components/DevForm/Projects/Projects";
import Skills from "../components/DevForm/Skills/Skills";

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
