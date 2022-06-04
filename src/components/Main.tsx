import styled from "styled-components";
import Form from "./Form";
import Preview from "./Preview";
import { useState } from "react";
import { ChangeEvent } from "react";
import { nanoid } from "nanoid";
import { emptyResume, exampleResume } from "../utils/";
import { Resume } from "../types/";

export default function Main() {
  const [resume, setResume] = useState<Resume>(emptyResume);

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

  const handleChangeExperience = (e: ChangeEvent, id: string) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setResume((oldResume) => {
      const newExperience = oldResume.experienceItems.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...oldResume, experienceItems: [...newExperience] };
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

  const handleAddExperience = () => {
    setResume((oldResume) => ({
      ...oldResume,
      experienceItems: [
        ...oldResume.experienceItems,
        {
          id: nanoid(),
          employerName: "",
          jobTitle: "",
          workCity: "",
          workState: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
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

  const handleDeleteExperience = (id: string) => {
    setResume((oldResume) => {
      const newExperience = oldResume.experienceItems.filter(
        (experienceItem) => {
          return experienceItem.id !== id;
        }
      );
      return { ...oldResume, experienceItems: [...newExperience] };
    });
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

  console.log(handleChangeSkill);

  return (
    <MainWrapper>
      <Form
        resume={resume}
        handleChangePersonal={handleChangePersonal}
        handleChangeExperience={handleChangeExperience}
        handleChangeEducation={handleChangeEducation}
        handleChangeSkill={handleChangeSkill}
        handleAddExperience={handleAddExperience}
        handleAddEducation={handleAddEducation}
        handleAddSkill={handleAddSkill}
        handleDeleteExperience={handleDeleteExperience}
        handleDeleteEducation={handleDeleteEducation}
        handleDeleteSkill={handleDeleteSkill}
        handleLoadExample={handleLoadExample}
      />
      <Preview resume={resume} />
    </MainWrapper>
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
