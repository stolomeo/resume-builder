import { EducationItem } from "../../../types/";
import { BottomItems, TopItems } from "../Experience/ExperienceItems";

type Props = {
  educationItem: EducationItem;
};

export default function EducationItems({ educationItem }: Props) {
  const { university, schoolCity, schoolState, degree, major, graduationDate } =
    educationItem;
  return (
    <>
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
    </>
  );
}
