import styled from "styled-components";
import Form from "./Form";
import Preview from "./Preview";
import { useContext, useState } from "react";
import { ChangeEvent } from "react";
import { nanoid } from "nanoid";
import { emptyResume, exampleResume } from "../utils/";
import { ResumeType } from "../types/";
import { ResumeContext } from "../context/ResumeContext";

export default function Main() {
  const [resume, setResume] = useState<ResumeType>(emptyResume);

  const handleChangePersonal = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setResume({
      ...resume,
      personalItems: {
        ...resume.personalItems,
        [name]: value,
      },
    });
  };

  const handleChangeEducation = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setResume((oldResume) => {
      const newEducation = oldResume.educationItems.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...oldResume, educationItems: [...newEducation] };
    });
  };

  const handleChangeSkill = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setResume((oldResume) => {
      const newSkill = oldResume.skillItems.map((skillItem) => {
        if (skillItem.id === id) {
          return { ...skillItem, [name]: value };
        }
        return skillItem;
      });
      return { ...oldResume, skillItems: [...newSkill] };
    });
  };

  const handleAddEducation = () => {
    setResume((oldResume) => ({
      ...oldResume,
      educationItems: [
        ...oldResume.educationItems,
        {
          id: nanoid(),
          university: "",
          degree: "",
          major: "",
          schoolCity: "",
          schoolState: "",
          graduationDate: "",
        },
      ],
    }));
  };
  const handleAddSkill = () => {
    setResume((oldResume) => ({
      ...oldResume,
      skillItems: [
        ...oldResume.skillItems,
        {
          id: nanoid(),
          skill: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (id: string) => {
    setResume((oldResume) => {
      const newEducation = oldResume.educationItems.filter((educationItem) => {
        return educationItem.id !== id;
      });
      return { ...oldResume, educationItems: [...newEducation] };
    });
  };

  const handleDeleteSkill = (id: string) => {
    setResume((oldResume) => {
      const newSkill = oldResume.skillItems.filter((skillItem) => {
        return skillItem.id !== id;
      });
      return { ...oldResume, skillItems: [...newSkill] };
    });
  };

  const handleLoadExample = () => {
    setResume(exampleResume);
  };

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      <MainWrapper>
        <Form
          resume={resume}
          setResume={setResume}
          handleChangePersonal={handleChangePersonal}
          handleChangeEducation={handleChangeEducation}
          handleChangeSkill={handleChangeSkill}
          handleAddEducation={handleAddEducation}
          handleAddSkill={handleAddSkill}
          handleDeleteEducation={handleDeleteEducation}
          handleDeleteSkill={handleDeleteSkill}
          handleLoadExample={handleLoadExample}
        />
        <Preview resume={resume} />
      </MainWrapper>
    </ResumeContext.Provider>
  );
}

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;

  gap: 4rem;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;
