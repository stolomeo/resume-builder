import Education from "../components/Resume/Form/Education/";
import Experience from "../components/Resume/Form/Experience/";
import PersonalForm from "../components/Resume/Form/Personal/";
import Projects from "../components/Resume/Form/Projects/";
import Skills from "../components/Resume/Form/Skills/";

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
