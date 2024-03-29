import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import { useContext } from "react";
import UserContext from "@context/UserContext";
import { ResumeType } from "../../../../types/resume.type";
import LanguagesForm from "./LanguagesForm";

export default function Languages() {
  const { user, setUser } = useContext(UserContext);

  const handleAddLanguage = () => {
    let resume: ResumeType = user.resume;
    resume = {
      ...resume,
      languageItems: [
        ...resume.languageItems,
        {
          id: nanoid(),
          language: "",
        },
      ],
    };
    setUser({ ...user, resume: resume });
  };

  const languageElements = user.resume.languageItems.map((languageItem) => {
    return <LanguagesForm key={languageItem.id} languageItem={languageItem} />;
  });
  return (
    <>
      {languageElements}
      <Button variant="outlined" onClick={handleAddLanguage}>
        Add language
      </Button>
    </>
  );
}
