import { useState } from "react";
import { ChangeEvent } from "react";
import { nanoid } from "nanoid";
import { emptyResume, exampleResume } from "../utils/";
import { Resume } from "../types/";
import Preview from "./Preview";
import Form from "./Form";
import styled from "styled-components";

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

  const handleLoadExample = () => {
    setResume(exampleResume);
  };

  return (
    <MainWrapper>
      <Form
        resume={resume}
        handleChangePersonal={handleChangePersonal}
        handleChangeExperience={handleChangeExperience}
        handleChangeEducation={handleChangeEducation}
        handleAddExperience={handleAddExperience}
        handleAddEducation={handleAddEducation}
        handleDeleteExperience={handleDeleteExperience}
        handleDeleteEducation={handleDeleteEducation}
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
