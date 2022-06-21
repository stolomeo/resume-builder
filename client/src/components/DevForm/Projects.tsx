import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "../../context";
import { DevResumeType } from "../../types";
import ProjectsForm from "./ProjectsForm";

export default function Projects() {
  const { user, setUser } = useContext(UserContext);

  const handleAddProject = () => {
    let resume: DevResumeType = user.resume;
    resume = {
      ...resume,
      projectItems: [
        ...resume.projectItems,
        {
          id: nanoid(),
          projectName: "",
          projectRole: "",
          projectEndDate: "",
          projectPointItems: [
            {
              id: nanoid(),
              projectPoint: "",
            },
          ],
        },
      ],
    };
    setUser({ ...user, resume: resume });
    console.log(user.resume);
  };

  const projectElements = user.resume.projectItems.map((projectItem) => {
    return <ProjectsForm key={projectItem.id} projectItem={projectItem} />;
  });
  return (
    <>
      {projectElements}
      <Button variant="outlined" onClick={handleAddProject}>
        Add Project
      </Button>
    </>
  );
}
