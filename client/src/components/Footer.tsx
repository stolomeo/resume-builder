import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright © 2022 stolomeo</p>
      <GithubLink href="https://github.com/stolomeo" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  );
}
const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.roboto};
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  flex-shrink: 0;
`;

const GithubLink = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.8rem;
  &:hover {
    color: ${({ theme }) => theme.colors.darkHover};
  }
  &:active {
    color: ${({ theme }) => theme.colors.darkActive};
  }
`;
