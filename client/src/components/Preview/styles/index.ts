import styled from "styled-components";

export const PreviewSection = styled.section<{ mt?: string }>`
  margin-top: ${(props) => props.mt};
`;

export const SectionHeader = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;
export const SectionItems = styled.section<{ gap?: string; flexD?: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexD};
  gap: ${(props) => props.gap};
`;

export const Items = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ItemList = styled.ul<{ fontStyle?: string }>`
  display: flex;
  justify-content: space-between;
  font-style: ${(props) => props.fontStyle};
`;

export const Item = styled.li<{ fontWeight?: string }>`
  font-weight: ${(props) => props.fontWeight};
  display: block;
`;
