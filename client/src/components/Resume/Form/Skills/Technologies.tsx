import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "../../../../context";
import { ResumeType } from "../../../../types/resume.type";
import TechnologiesForm from "./TechnologiesForm";

export default function Technologies() {
  const { user, setUser } = useContext(UserContext);

  const handleAddTechnology = () => {
    let resume: ResumeType = user.resume;
    resume = {
      ...resume,
      technologyItems: [
        ...resume.technologyItems,
        {
          id: nanoid(),
          technology: "",
        },
      ],
    };
    setUser({ ...user, resume: resume });
  };

  const technologyElements = user.resume.technologyItems.map(
    (technologyItem) => {
      return (
        <TechnologiesForm
          key={technologyItem.id}
          technologyItem={technologyItem}
        />
      );
    }
  );
  return (
    <>
      {technologyElements}
      <Button variant="outlined" onClick={handleAddTechnology}>
        Add Technology
      </Button>
    </>
  );
}
