import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../../context";
import { flexColumn } from "../../../styles";
import { TechnologyItemsType } from "../../../types";

type Props = {
  technologyItem: TechnologyItemsType;
};
export default function TechnologiesForm({ technologyItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleChangeTechnology = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    let resume = user.resume;
    resume.technologyItems = resume.technologyItems.map((technologyItem) => {
      if (technologyItem.id === id) {
        return { ...technologyItem, [name]: value };
      }
      return technologyItem;
    });
    setUser({ ...user, resume: resume });
  };

  const handleDeleteTechnology = (id: string) => {
    let resume = user.resume;
    resume.technologyItems = resume.technologyItems.filter((technologyItem) => {
      return technologyItem.id !== id;
    });
    setUser({ ...user, resume: resume });
  };

  const { technology, id } = technologyItem;
  return (
    <Box sx={flexColumn}>
      <TextField
        variant="standard"
        type="text"
        name="technology"
        label="Technology"
        placeholder="React"
        value={technology}
        onChange={(e) => handleChangeTechnology(e, id)}
      />
      <Button variant="outlined" onClick={() => handleDeleteTechnology(id)}>
        Delete
      </Button>
    </Box>
  );
}
