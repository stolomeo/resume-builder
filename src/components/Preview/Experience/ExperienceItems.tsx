import { Items, ItemList, Item } from "../styles";
import { ResumeExperienceItems } from "../../../types/";

type Props = {
  experienceItem: ResumeExperienceItems;
};

export default function Experiences({ experienceItem }: Props) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    experienceItem;
  return (
    <Items>
      <ItemList>
        <Item fontWeight="bold">{employerName}</Item>
        <Item fontWeight="bold">
          {startDate} - {endDate}
        </Item>
      </ItemList>
      <ItemList fontStyle="italic">
        <Item>{jobTitle}</Item>
        <Item>
          {workCity}, {workState}
        </Item>
      </ItemList>
    </Items>
  );
}
