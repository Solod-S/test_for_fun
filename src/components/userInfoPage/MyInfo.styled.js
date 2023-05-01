import styled from "styled-components";
import banner from "../../img/banner.png";
import defaultAvatar from "../../img/defaultAvatar.png";

export const Banner = styled.img.attrs({
  src: banner,
  alt: "banner",
})`
  width: 208px;
  margin-bottom: 8px;
  opacity: 0.6;
`;

export const Tittle = styled.h1`
  margin-bottom: 15px;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  color: ${(p) => p.theme.colors.primaryTextColor};
`;

export const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  overflow: hidden;
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
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeight.bolt};
  color: red;
  opacity: 0.8;
`;

export const Tweets = styled.p`
  margin-bottom: 10px;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const Followers = styled.p`
  margin-bottom: 16px;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const LogOutBtn = styled.button`
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
