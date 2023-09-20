import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useContext } from "react";
import UserContext from "@context/UserContext";
import { getFlexboxStyles } from "@utils/customStyles";
import { ExperiencePointItemsType } from "../../../../types/resume.type";

type Props = {
  experiencePointItem: ExperiencePointItemsType;
};

export default function ExperiencePointsForm({ experiencePointItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleChangeExperiencePoint = (e: ChangeEvent, id: string) => {
    const { value } = e.target as HTMLTextAreaElement;
    let items = user.resume.experienceItems;
    let itemIndex = 0;
    // Depth first search. Graph Theory. Runtime O(n^2)
    items.forEach((item) => {
      let pointItemIndex = 0;
      item.experiencePointItems.forEach((pointItem) => {
        if (pointItem.id === experiencePointItem.id) {
          pointItem.experiencePoint = value;
          user.resume.experienceItems[itemIndex].experiencePointItems[
            pointItemIndex
          ].experiencePoint = value;
        }
        pointItemIndex += 1;
      });
      itemIndex += 1;
    });

    setUser({ ...user, resume: user.resume });
  };

  const handleDeleteExperiencePoint = (id: string) => {
    let items = user.resume.experienceItems;
    items.forEach((item, index) => {
      const keptItems = item.experiencePointItems.filter(
        (experiencePointItem) => {
          return experiencePointItem.id !== id;
        }
      );
      items[index].experiencePointItems = keptItems;
    });
    setUser({ ...user, resume: user.resume });
  };

  const { experiencePoint, id } = experiencePointItem;
  return (
    <Box sx={getFlexboxStyles({ flexDirection: "column", mt: 1.5 })}>
      <TextField
        variant="standard"
        type="text"
        name="experiencePoint"
        label="Job Responsibility"
        placeholder="Designed, developed, implemented, and supported complex JAVA/J2EE applications"
        value={experiencePoint}
        onChange={(e) => handleChangeExperiencePoint(e, id)}
      />
      <Button
        variant="outlined"
        onClick={() => handleDeleteExperiencePoint(id)}
      >
        Delete
      </Button>
    </Box>
  );
}
