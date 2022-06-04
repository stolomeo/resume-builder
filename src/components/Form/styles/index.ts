import styled from "styled-components";

export const FormWrapper = styled.form<{ flexD: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexD};
  gap: 1rem;
`;

export const FormSectionHeader = styled.h2`
  font-weight: bold;
  padding: 0.5rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
`;

export const SectionWrapper = styled.section<{ flexD: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexD};
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
`;
