import Education from "../components/DevForm/Education";
import Experience from "../components/DevForm/Experience";
import PersonalForm from "../components/DevForm/PersonalForm";
import Projects from "../components/DevForm/Projects";
import Skills from "../components/DevForm/Skills";

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
