import Education from "../components/Form/Education/Education";
import Experience from "../components/Form/Experience/Experience";
import PersonalForm from "../components/Form/Personal/PersonalForm";
import Projects from "../components/Form/Projects/Projects";
import Skills from "../components/Form/Skills/Skills";

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
