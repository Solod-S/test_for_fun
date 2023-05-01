import styled from "styled-components";
import logIn from "../../img/logIn.png";

export const Banner = styled.img.attrs({
  src: logIn,
  alt: "logIn",
})`
  width: 208px;
  margin-bottom: 8px;
  margin-top: 20px;
  opacity: 0.8;
`;

export const Tittle = styled.h1`
  margin-bottom: 15px;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  color: ${(p) => p.theme.colors.primaryTextColor};
`;

export const LogInBtn = styled.button`
  &:hover {
    transform: scale(1.05);
  }
  margin: 0 auto;
  padding: 8px 10px;
  font-size: ${(p) => p.theme.fontSizes.xs};
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
