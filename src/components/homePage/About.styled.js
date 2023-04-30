import styled from "styled-components";

export const Abaut = styled.h1`
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;

  position: relative;
  padding: 0 20px;
  /* display: inline-block; */
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 1px;
    background-color: #ccc;
  }
  &:before {
    top: 40%;
    left: 0;
  }
  &:after {
    top: 40%;
    right: 0;
  }
`;

export const Text = styled.p`
  margin-bottom: 16px;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const LinkList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-decoration: underline;
`;
export const LinkItem = styled.li``;

export const Link = styled.a`
  &:hover {
    color: red;
  }
  &.active {
    color: red;
  }
  color: ${(p) => p.theme.colors.primaryTextColor};
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
`;
