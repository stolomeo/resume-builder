import { Box } from "@mui/material";

export default function Skill() {
  // const { user, setUser } = useContext(UserContext);

  // const handleAddSkill = () => {
  //   let resume: ResumeType = user.resume;
  //   resume = {
  //     ...resume,
  //     skillItems: [
  //       ...resume.skillItems,
  //       {
  //         id: nanoid(),
  //         skill: "",
  //       },
  //     ],
  //   };
  //   setUser({ ...user, resume: resume });
  // };

  // const skillElements = user.resume.skillItems.map((skillItem) => {
  //   return <SkillForm key={skillItem.id} skillItem={skillItem} />;
  // });

  return (
    <Box sx={{ gap: "1.5rem", display: "flex", flexDirection: "column" }}>
      {/* <Typography component="h2" variant="h6">
        SKILLS
      </Typography>
      <>
        {skillElements}
        <Button variant="outlined" onClick={handleAddSkill}>
          Add Skill
        </Button>
      </> */}
    </Box>
  );
}
