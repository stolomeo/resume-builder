import Education from "../components/Resume/Form/Education/Education";
import Experience from "../components/Resume/Form/Experience/Experience";
import PersonalForm from "../components/Resume/Form/Personal/PersonalForm";
import Projects from "../components/Resume/Form/Projects/Projects";
import Skills from "../components/Resume/Form/Skills/Skills";

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
