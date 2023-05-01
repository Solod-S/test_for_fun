import styled from "styled-components";
import { NavLink } from "react-router-dom";

import defaultAvatar from "../../../img/defaultAvatar.png";

export const Item = styled.li`
  &:hover {
    transform: scale(1.05);
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  padding: 5px;
  border-radius: ${(p) => p.theme.radius.normal};
  transition: transform 0.2s ease-in-out;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const AvatarBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${(props) =>
    props.subscribed ? "red" : props.theme.colors.primaryTextColor};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: ${(p) => p.theme.radius.round};
`;

export const AvatarWrapper = styled.div`
  width: 30px;
  height: 30px;
  background: ${(p) => p.theme.colors.primaryBgColor};
  border-radius: ${(p) => p.theme.radius.round};
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.avatar ? props.avatar : defaultAvatar,
  alt: "avatar",
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const TweetsCounterTitle = styled.h2`
  text-decoration: underline;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const TweetsCounter = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const FollowersCounterTitle = styled.h2`
  text-decoration: underline;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const FollowersCounter = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const NavigateTo = styled(NavLink)`
  &:hover {
    background: ${(p) => p.theme.colors.accentColor};
  }
  padding: 6px 12px;
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: background 0.2s ease-in-out;
  background-color: ${(p) =>
    p.isFollowed
      ? p.theme.colors.accentColor
      : p.theme.colors.primaryTextColor};
`;
