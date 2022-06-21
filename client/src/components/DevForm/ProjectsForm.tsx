import { Box, Button, TextField } from "@mui/material";
import { nanoid } from "nanoid";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../context";
import { ProjectItemsType, ProjectPointItemsType } from "../../types";
import ProjectPointsForm from "./ProjectPointsForm";

type Props = {
  projectItem: ProjectItemsType;
};
export default function ProjectsForm({ projectItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  let { id, projectName, projectRole, projectEndDate, projectPointItems } =
    projectItem as any;

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

  const handleAddProjectDetail = () => {
    let resume = user.resume;
    let itemIndex = 0;
    // Search algorithm. O(n) runtime
    resume.projectItems.forEach((item, index) => {
      if (item.id === projectItem.id) {
        itemIndex = index;
      }
    });
    resume.projectItems[itemIndex].projectPointItems = [
      ...projectPointItems,
      {
        id: nanoid(),
        projectPoint: "",
      },
    ];
    setUser({ ...user, resume: resume });
    console.log(user.resume);
  };

  const projectPointItemElements = projectPointItems.map(
    (projectPointItem: ProjectPointItemsType) => {
      return <ProjectPointsForm projectPointItem={projectPointItem} />;
    }
  );

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
      {projectPointItemElements}
      <Button variant="outlined" onClick={handleAddProjectDetail}>
        Add project detail
      </Button>
      <Button variant="outlined" onClick={() => handleDeleteProject(id)}>
        Delete Project
      </Button>
    </>
  );
}
