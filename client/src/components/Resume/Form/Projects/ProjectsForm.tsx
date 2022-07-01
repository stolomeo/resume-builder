import { Box, Button, TextField } from "@mui/material";
import { nanoid } from "nanoid";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../../context";
import { formInputBox } from "../../../../styles";
import { ProjectItemsType, ProjectPointItemsType } from "../../../../types";
import ProjectPointsForm from "./ProjectPointsForm";

type Props = {
  projectItem: ProjectItemsType;
};
export default function ProjectsForm({ projectItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  let {
    id,
    projectName,
    projectLiveLink,
    projectRepoLink,
    projectEndDate,
    projectPointItems,
  } = projectItem;

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
  };

  const projectPointItemElements = projectPointItems.map(
    (projectPointItem: ProjectPointItemsType) => {
      return <ProjectPointsForm projectPointItem={projectPointItem} />;
    }
  );

  return (
    <>
      <Box sx={formInputBox}>
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
          name="projectLiveLink"
          label="Live Link"
          placeholder="https://ezcv.app/"
          value={projectLiveLink}
          onChange={(e) => handleChangeProject(e, id)}
        />
        <TextField
          variant="standard"
          type="text"
          name="projectRepoLink"
          label="Repo Link"
          placeholder="https://github.com/stolomeo/resume-builder"
          value={projectRepoLink}
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
