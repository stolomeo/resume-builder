import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../context";
import { JobPointItemsType } from "../../types";
type Props = {
  jobPointItem: JobPointItemsType;
};

export default function JobPointsForm({ jobPointItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleChangeJobPoint = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    let resume = user.resume;
    resume.jobPointItems = resume.jobPointItems.map((jobPointItem) => {
      if (jobPointItem.id === id) {
        return { ...jobPointItem, [name]: value };
      }
      return jobPointItem;
    });
    setUser({ ...user, resume: resume });
  };

  const handleDeleteJobPoint = (id: string) => {
    let resume = user.resume;
    resume.jobPointItems = resume.jobPointItems.filter((jobPointItem) => {
      return jobPointItem.id !== id;
    });
    setUser({ ...user, resume: resume });
  };

  const { jobPoint, id } = jobPointItem;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5 }}>
      <TextField
        variant="standard"
        type="text"
        name="jobPoint"
        label="Job Responsibility"
        placeholder="Designed, developed, implemented, and supported complex JAVA/J2EE applications"
        value={jobPoint}
        onChange={(e) => handleChangeJobPoint(e, id)}
      />
      <Button variant="outlined" onClick={() => handleDeleteJobPoint(id)}>
        Delete
      </Button>
    </Box>
  );
}
