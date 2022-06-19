import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "../../context";
import { DevResumeType } from "../../types";
import JobPointsForm from "./JobPointsForm";

export default function JobPoints() {
  const { user, setUser } = useContext(UserContext);

  const handleAddjobPoint = () => {
    let resume: DevResumeType = user.resume;
    resume = {
      ...resume,
      jobPointItems: [
        ...resume.jobPointItems,
        {
          id: nanoid(),
          jobPoint: "",
        },
      ],
    };
    setUser({ ...user, resume: resume });
  };

  const jobPointElements = user.resume.jobPointItems.map((jobPointItem) => {
    return <JobPointsForm key={jobPointItem.id} jobPointItem={jobPointItem} />;
  });
  return (
    <>
      {jobPointElements}
      <Button variant="outlined" onClick={handleAddjobPoint}>
        Add Responsibility
      </Button>
    </>
  );
}
