import Education from "../components/Form/Education";
import Experience from "../components/Form/Experience";
import Personal from "../components/Form/Personal";
import Skill from "../components/Form/Skill";

export const handleComponentSelection = (count: number) => {
  if (count === 25) {
    return <Personal />;
  } else if (count === 50) {
    return <Experience />;
  } else if (count === 75) {
    return <Education />;
  } else if (count === 100) {
    return <Skill />;
  }
};
