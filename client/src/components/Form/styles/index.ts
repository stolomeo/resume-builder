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
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.boxShadows.button};
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.darkActive};
    box-shadow: ${({ theme }) => theme.boxShadows.active};
    outline: none;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.boxShadows.input};
  font-size: 16px;
`;

export const SectionWrapper = styled.section<{ flexD: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexD};
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
`;
