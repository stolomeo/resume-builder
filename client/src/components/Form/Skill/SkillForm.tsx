import { Box } from "@mui/material";

// type Props = {
//   skillItem: ResumeSkillItems;
// };
export default function SkillForm() {
  // const { user, setUser } = useContext(UserContext);

  // const handleChangeSkill = (e: ChangeEvent, id: string) => {
  //   const { name, value } = e.target as HTMLTextAreaElement;
  //   let resume = user.resume;
  //   resume.skillItems = resume.skillItems.map((skillItem) => {
  //     if (skillItem.id === id) {
  //       return { ...skillItem, [name]: value };
  //     }
  //     return skillItem;
  //   });
  //   setUser({ ...user, resume: resume });
  // };

  // const handleDeleteSkill = (id: string) => {
  //   let resume = user.resume;
  //   resume.skillItems = resume.skillItems.filter((skillItem) => {
  //     return skillItem.id !== id;
  //   });
  //   setUser({ ...user, resume: resume });
  // };

  // const { skill, id } = skillItem;

  return (
    <Box sx={{ display: "flex", gap: "3rem" }}>
      {/* <TextField
        variant="standard"
        type="text"
        name="skill"
        placeholder="Skill"
        value={skill}
        onChange={(e) => handleChangeSkill(e, id)}
      />
      <Button variant="outlined" onClick={() => handleDeleteSkill(id)}>
        Delete Skill
      </Button> */}
    </Box>
  );
}
