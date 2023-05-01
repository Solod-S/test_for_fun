import styled from "styled-components";

import banner from "../../../img/banner.png";

export const Banner = styled.img.attrs({
  src: banner,
  alt: "avatar",
})`
  width: 308px;
  margin-bottom: 88px;
`;

export const List = styled.ul`
  width: 100%;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  &:hover {
    transform: scale(1.05);
  }
  margin: 0 auto;
  padding: 8px 10px;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: transform 0.2s ease-in-out;
  background-color: ${(p) =>
    p.isFollowed
      ? p.theme.colors.accentColor
      : p.theme.colors.primaryTextColor};
`;
