import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../context";
import { ProjectItemsType } from "../../types";
import ProjectPoints from "./ProjectPoints";

type Props = {
  projectItem: ProjectItemsType;
};
export default function ProjectsForm({ projectItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const { id, projectName, projectRole, projectEndDate } = projectItem;

  const handleChangeProject = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    let resume = user.resume;
    resume.projectItems = resume.projectItems.map((projectItem) => {
      if (projectItem.id === id) {
        return { ...projectItem, [name]: value };
      }
      return projectItem;
    });
    setUser({ ...user, resume: resume });
  };

  const handleDeleteProject = (id: string) => {
    let resume = user.resume;
    resume.projectItems = resume.projectItems.filter((projectItem) => {
      return projectItem.id !== id;
    });
    setUser({ ...user, resume: resume });
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <TextField
          variant="standard"
          type="text"
          name="projectName"
          label="Project Name"
          placeholder="Resume Builder"
          value={projectName}
          onChange={(e) => handleChangeProject(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="projectRole"
          label="Project Role"
          placeholder="Lead Developer"
          value={projectRole}
          onChange={(e) => handleChangeProject(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="projectEndDate"
          label="Completion Date"
          placeholder="Feb 2021"
          value={projectEndDate}
          onChange={(e) => handleChangeProject(e, id)}
        />
      </Box>
      <ProjectPoints />
      <Button variant="outlined" onClick={() => handleDeleteProject(id)}>
        Delete Project
      </Button>
    </>
  );
}
