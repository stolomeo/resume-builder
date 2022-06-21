import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useContext } from "react";
import UserContext from "../../context";
import { ExperiencePointItemsType } from "../../types";

type Props = {
  experiencePointItem: ExperiencePointItemsType;
};

export default function ExperiencePointsForm({ experiencePointItem }: Props) {
  const { user, setUser } = useContext(UserContext);

  const handleChangeExperiencePoint = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
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
    console.log(user.resume);
  };

  const handleDeleteExperiencePoint = (id: string) => {
    console.log(id);
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
    <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5 }}>
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

// import { Button, TextField } from "@mui/material";
// import { Box } from "@mui/system";
// import { ChangeEvent, useContext } from "react";
// import UserContext from "../../context";
// import { experiencePointItemsType } from "../../types";

// type Props = {
//   projectPointItem: ProjectPointItemsType;
// };

// export default function ProjectPointsForm({ projectPointItem }: Props) {
//   const { user, setUser } = useContext(UserContext);

//   const handleChangeProjectPoint = (e: ChangeEvent, id: string) => {
//     const { name, value } = e.target as HTMLTextAreaElement;
//     let items = user.resume.projectItems;
//     let itemIndex = 0;
//     // Depth first search. Graph Theory. Runtime O(n^2)
//     items.forEach((item) => {
//       let pointItemIndex = 0;
//       item.projectPointItems.forEach((pointItem) => {
//         if (pointItem.id === projectPointItem.id) {
//           pointItem.projectPoint = value;
//           user.resume.projectItems[itemIndex].projectPointItems[
//             pointItemIndex
//           ].projectPoint = value;
//         }
//         pointItemIndex += 1;
//       });
//       itemIndex += 1;
//     });

//     setUser({ ...user, resume: user.resume });
//     console.log(user.resume);
//   };

//   const handleDeleteProjectPoint = (id: string) => {
//     console.log(id);
//     let items = user.resume.projectItems;
//     items.forEach((item, index) => {
//       const keptItems = item.projectPointItems.filter((projectPointItem) => {
//         return projectPointItem.id !== id;
//       });
//       items[index].projectPointItems = keptItems;
//     });
//     setUser({ ...user, resume: user.resume });
//   };

//   const { projectPoint, id } = projectPointItem;
//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", mt: 1.5 }}>
//       <TextField
//         variant="standard"
//         type="text"
//         name="projectPoint"
//         label="Project Detail"
//         placeholder="Created a web application using Pokemon sprites so that users can test their memory"
//         value={projectPoint}
//         onChange={(e) => handleChangeProjectPoint(e, id)}
//       />
//       <Button variant="outlined" onClick={() => handleDeleteProjectPoint(id)}>
//         Delete
//       </Button>
//     </Box>
//   );
// }
