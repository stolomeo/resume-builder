import Education from "../components/Resume/Form/Education/";
import Experience from "../components/Resume/Form/Experience/";
import PersonalForm from "../components/Resume/Form/Personal/";
import Projects from "../components/Resume/Form/Projects/";
import Skills from "../components/Resume/Form/Skills/";

export const handleComponentSelection = (count: number) => {
  const componentMap: Record<number, JSX.Element> = {
    20: <PersonalForm />,
    40: <Education />,
    60: <Skills />,
    80: <Projects />,
    100: <Experience />,
  };

  return componentMap[count];
};
