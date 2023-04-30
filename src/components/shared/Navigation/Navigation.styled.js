import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  padding: 10px;
`;

export const NavigationBar = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: right;
`;

export const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavigationLink = styled(NavLink)`
  :focus {
    color: red;
    fill: red;
  }
  :hover {
    color: red;

    fill: red;
  }
  &.active {
    color: red;

    fill: red;
  }
  color: ${(p) => p.theme.colors.primaryTextColor};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;
