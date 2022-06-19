import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../context";
import { LanguageItemsType } from "../../types";

type Props = {
  languageItem: LanguageItemsType;
};

export default function LanguagesForm({ languageItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleChangeLanguage = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    let resume = user.resume;
    resume.languageItems = resume.languageItems.map((languageItem) => {
      if (languageItem.id === id) {
        return { ...languageItem, [name]: value };
      }
      return languageItem;
    });
    setUser({ ...user, resume: resume });
  };

  const handleDeleteLanguage = (id: string) => {
    let resume = user.resume;
    resume.languageItems = resume.languageItems.filter((languageItem) => {
      return languageItem.id !== id;
    });
    setUser({ ...user, resume: resume });
  };

  const { language, id } = languageItem;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        variant="standard"
        type="text"
        name="language"
        label="Programming Language"
        placeholder="JavaScript"
        value={language}
        onChange={(e) => handleChangeLanguage(e, id)}
      />
      <Button variant="outlined" onClick={() => handleDeleteLanguage(id)}>
        Delete
      </Button>
    </Box>
  );
}
