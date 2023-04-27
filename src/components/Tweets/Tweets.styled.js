import styled from "styled-components";
import banner from "../../img/banner.png";
import logo from "../../img/logo.png";
import rectangle from "../../img/rectangle.png";
import defaultAvatar from "../../img/defaultAvatar.png";

export const Section = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Window = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  padding: 28px 36px 36px 36px;
  background: ${(p) => p.theme.colors.primaryBgColor};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: ${(p) => p.theme.radius.normal};
  overflow: hidden;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
`;

export const Banner = styled.img.attrs({
  src: banner,
})`
  width: 308px;
  margin-bottom: 88px;
`;

export const Rectangle = styled.img.attrs({
  src: rectangle,
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AvatarBorder = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(p) => p.theme.colors.primaryTextColor};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: ${(p) => p.theme.radius.round};
`;

export const AvatarWrapper = styled.div`
  width: 62px;
  height: 62px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background: ${(p) => p.theme.colors.primaryBgColor};
  border-radius: ${(p) => p.theme.radius.round};
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.avatar ? props.avatar : defaultAvatar,
}))``;

export const TweetsCounter = styled.p`
  margin-bottom: 16px;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const FollowersCounter = styled.p`
  margin-bottom: 26px;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const Button = styled.button`
  &:hover {
    transform: scale(1.05);
  }
  padding: 14px 56px;
  font-size: ${(p) => p.theme.fontSizes.m};
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
