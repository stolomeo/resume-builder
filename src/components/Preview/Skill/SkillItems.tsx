import { SkillItemsType } from "../../../types";
import { Item } from "../styles";

type Props = {
  skillItem: SkillItemsType;
};

export default function SkillItems({ skillItem }: Props) {
  const { skill } = skillItem;
  return <Item>{skill};</Item>;
}
