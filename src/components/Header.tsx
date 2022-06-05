import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>CV CREATOR</HeaderText>;
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  font-size: 48px;
  font-family: "Zen Tokyo Zoo", cursive;
  color: ${({ theme }) => theme.colors.light};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightHover};
  }
`;
