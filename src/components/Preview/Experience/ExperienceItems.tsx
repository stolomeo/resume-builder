import { BottomItems, Items, TopItems } from "../styles";
import { ResumeExperienceItems } from "../../../types/";

type Props = {
  experienceItem: ResumeExperienceItems;
};

export default function Experiences({ experienceItem }: Props) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    experienceItem;
  return (
    <Items>
      <TopItems>
        <p>{employerName}</p>
        <p>
          {startDate} - {endDate}
        </p>
      </TopItems>
      <BottomItems>
        <p>{jobTitle}</p>
        <p>
          {workCity}, {workState}
        </p>
      </BottomItems>
    </Items>
  );
}
