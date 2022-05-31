import styled from "styled-components";
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

export const TopItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const BottomItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
`;
