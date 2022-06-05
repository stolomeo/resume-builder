import { ResumeSkillItems } from "../../../types";
import { Item } from "../styles";

type Props = {
  skillItem: ResumeSkillItems;
};

export default function SkillItems({ skillItem }: Props) {
  const { skill } = skillItem;
  return <Item>{skill};</Item>;
}
