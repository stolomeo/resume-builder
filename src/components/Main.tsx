import { useState } from "react";
import { ChangeEvent } from "react";
import { nanoid } from "nanoid";
import { emptyResume } from "../utils/";
import Preview from "./Preview";
import Form from "./Form";
import styled from "styled-components";

export default function Main() {
  const [resume, setResume] = useState(emptyResume);

  const handleChangePersonal = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setResume((oldResume) => ({
      ...oldResume,
      personalItems: {
        ...oldResume.personalItems,
        [name]: value,
      },
    }));
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
  console.log(resume);
  const handleAddEducation = () => {
    setResume((oldResume: any) => ({
      ...oldResume,
      educationItems: [
        ...oldResume.educationItems,
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

  return (
    <MainWrapper>
      <FormWrapper>
        <Form
          resume={resume}
          handleChangePersonal={handleChangePersonal}
          handleChangeExperience={handleChangeExperience}
          handleChangeEducation={handleChangeEducation}
          handleAddExperience={handleAddExperience}
          handleAddEducation={handleAddEducation}
          handleDeleteExperience={handleDeleteExperience}
          handleDeleteEducation={handleDeleteEducation}
        />
      </FormWrapper>
      <PreviewWrapper>
        <Preview resume={resume} />
      </PreviewWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1800px;
  padding: 4rem 8rem;

  gap: 4rem;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: rgb(238, 238, 238);
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  gap: 1rem;
`;

const PreviewWrapper = styled.div`
  font-family: "EB Garamond", serif;
  background-color: rgb(238, 238, 238);
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 210mm;
`;
