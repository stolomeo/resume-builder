import {
  CloudUpload,
  PictureAsPdf,
  RestartAlt,
  SettingsAccessibility,
} from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { nanoid } from "nanoid";
import { Dispatch, SetStateAction, useContext } from "react";
import UserContext from "../context/UserContext";
import { createResume, getExampleResume } from "../services/resume";

type Props = {
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Tool({ setCount }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleReset = () => {
    setUser({
      ...user,
      resume: {
        personalItems: {
          fullName: "",
          email: "",
          phone: "",
          githubLink: "",
          linkedinLink: "",
        },
        educationItems: [
          {
            id: nanoid(),
            majorAndDegree: "",
            schoolName: "",
            schoolLocation: "",
            graduationDate: "",
          },
        ],
        languageItems: [
          {
            id: nanoid(),
            language: "",
          },
        ],
        technologyItems: [
          {
            id: nanoid(),
            technology: "",
          },
        ],
        projectItems: [
          {
            id: nanoid(),
            projectName: "",
            projectRole: "",
            projectEndDate: "",
            projectPointItems: [
              {
                id: nanoid(),
                projectPoint: "",
              },
            ],
          },
        ],

        experienceItems: [
          {
            id: nanoid(),
            jobTitle: "",
            employerName: "",
            workLocation: "",
            startDate: "",
            endDate: "",
            experiencePointItems: [
              {
                id: nanoid(),
                experiencePoint: "",
              },
            ],
          },
        ],
      },
    });
    console.log(user);
    setCount(20);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExample = async () => {
    const exampleResume = await getExampleResume();
    setUser({ ...user, resume: exampleResume });
  };

  const handleSave = async () => {
    await createResume(user);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "inherit",
        "@media print": {
          display: "none",
        },
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          gap: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton size="medium" onClick={() => handleReset()}>
          <RestartAlt fontSize="medium" />
        </IconButton>
        <IconButton size="medium" onClick={handleSave}>
          <CloudUpload fontSize="medium" />
        </IconButton>
        <IconButton size="medium" onClick={handlePrint}>
          <PictureAsPdf fontSize="medium" />
        </IconButton>
        <IconButton size="medium" onClick={handleExample}>
          <SettingsAccessibility fontSize="medium" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
