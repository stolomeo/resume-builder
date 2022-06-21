import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../context";
import { ProjectPointItemsType } from "../../types";

type Props = {
  projectPointItem: ProjectPointItemsType;
};

export default function ProjectPointsForm({ projectPointItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleChangeProjectPoint = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    let items = user.resume.projectItems;
    let itemIndex = 0;
    items.forEach((item) => {
      let pointItemIndex = 0;
      item.projectPointItems.forEach((pointItem) => {
        if (pointItem.id === projectPointItem.id) {
          pointItem.projectPoint = value;
          user.resume.projectItems[itemIndex].projectPointItems[
            pointItemIndex
          ].projectPoint = value;
        }
        pointItemIndex += 1;
      });
      itemIndex += 1;
    });

    setUser({ ...user, resume: user.resume });
    console.log(user.resume);
  };

  const handleDeleteProjectPoint = (id: string) => {
    // let resume = user.resume;
    // resume.projectPointItems = resume.projectPointItems.filter(
    //   (projectPointItem) => {
    //     return projectPointItem.id !== id;
    //   }
    // );
    // setUser({ ...user, resume: resume });
  };

  const { projectPoint, id } = projectPointItem;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5 }}>
      <TextField
        variant="standard"
        type="text"
        name="projectPoint"
        label="Project Detail"
        placeholder="Created a web application using Pokemon sprites so that users can test their memory"
        value={projectPoint}
        onChange={(e) => handleChangeProjectPoint(e, id)}
      />
      <Button variant="outlined" onClick={() => handleDeleteProjectPoint(id)}>
        Delete
      </Button>
    </Box>
  );
}
