import { ExperienceItemsType } from "../../../types/";
import { Item, ItemList, Items } from "../styles";

type Props = {
  experienceItem: ExperienceItemsType;
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
