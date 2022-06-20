import {
  ProjectItemsType
} from "../../types";

type Props = {
  projectItem: ProjectItemsType;
};

export default function ProjectPoints({ projectItem }: Props) {
  // const { user, setUser } = useContext(UserContext);

  // const handleAddProjectPoint = () => {
  //   // add blank projectpoint
  //   let blankProjectPointItem: ProjectPointItemsType = {
  //     id: nanoid(),
  //     projectPoint: "",
  //   };
  //   projectItem.projectPointItems.push(blankProjectPointItem);

  //   // put the new projectpoints back
  //   let resume: DevResumeType = user.resume;
  //   let projectItems: ProjectItemsType[] = resume.projectItems;

  //   projectItems.map((projectItem) => {
  //       projectItem = projectItems);
  //   });




  //   setUser({ ...user, resume: resume });
  // };

  // const projectPointElements = user.resume.projectPointItems.map(
  //   (projectPointItem) => {
  //     return (
  //       <ProjectPointsForm
  //         key={projectPointItem.id}
  //         projectPointItem={projectPointItem}
  //       />
  //     );
  //   }
  // );
  return (
    <>
      {/* {projectPointElements}
      <Button variant="outlined" onClick={handleAddProjectPoint()}>
        Add
      </Button> */}
    </>
  );
}
