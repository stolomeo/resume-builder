import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>Resume Builder</HeaderText>;
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media print {
    display: none;
  }
`;

const HeaderText = styled.h1`
  font-size: 54px;
  font-family: ${({ theme }) => theme.fonts.zen};
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightHover};
  }
`;
