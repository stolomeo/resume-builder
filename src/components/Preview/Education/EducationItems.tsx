import { BottomItems, Items, TopItems } from "../styles";
import { ResumeEducationItems } from "../../../types/";

type Props = {
  educationItem: ResumeEducationItems;
};

export default function EducationItems({ educationItem }: Props) {
  const { university, schoolCity, schoolState, degree, major, graduationDate } =
    educationItem;
  return (
    <Items>
      <TopItems>
        <p>{university}</p>
        <p>{graduationDate}</p>
      </TopItems>
      <BottomItems>
        <p>
          {degree}, {major}
        </p>
        <p>
          {schoolCity}, {schoolState}
        </p>
      </BottomItems>
    </Items>
  );
}
