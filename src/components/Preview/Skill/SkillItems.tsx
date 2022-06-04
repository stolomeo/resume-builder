import { Items } from "../styles";
import { ResumeSkillItems } from "../../../types";

type Props = {
  skillItem: ResumeSkillItems;
};

export default function SkillItems({ skillItem }: Props) {
  const { skill } = skillItem;
  return (
    <Items>
      <p>{skill}</p>
    </Items>
  );
}
