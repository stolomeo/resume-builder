import { BottomItems, TopItems } from "../styles";
import { ExperienceItem } from "../../../types/";

type Props = {
  experienceItem: ExperienceItem;
};

export default function Experiences({ experienceItem }: Props) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    experienceItem;
  return (
    <>
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
    </>
  );
}
