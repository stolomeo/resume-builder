import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "@context/UserContext";
import { ResumeType } from "../../../../types/resume.type";
import ProjectsForm from "./ProjectsForm";

export default function Projects() {
  const { user, setUser } = useContext(UserContext);

  const handleAddProject = () => {
    let resume: ResumeType = user.resume;
    resume = {
      ...resume,
      projectItems: [
        ...resume.projectItems,
        {
          id: nanoid(),
          projectName: "",
          projectLiveLink: "",
          projectRepoLink: "",
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
