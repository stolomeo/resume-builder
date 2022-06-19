import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "../../context";
import { DevResumeType } from "../../types";
import ProjectPointsForm from "./ProjectPointsForm";

export default function ProjectPoints() {
  const { user, setUser } = useContext(UserContext);

  const handleAddProjectPoint = () => {
    let resume: DevResumeType = user.resume;
    resume = {
      ...resume,
      projectPointItems: [
        ...resume.projectPointItems,
        {
          id: nanoid(),
          projectPoint: "",
        },
      ],
    };
    setUser({ ...user, resume: resume });
  };

  const projectPointElements = user.resume.projectPointItems.map(
    (projectPointItem) => {
      return (
        <ProjectPointsForm
          key={projectPointItem.id}
          projectPointItem={projectPointItem}
        />
      );
    }
  );
  return (
    <>
      {projectPointElements}
      <Button variant="outlined" onClick={handleAddProjectPoint}>
        Add
      </Button>
    </>
  );
}
