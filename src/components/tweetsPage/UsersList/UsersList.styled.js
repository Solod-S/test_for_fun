import styled from "styled-components";
import banner from "../../../img/banner.png";
import logo from "../../../img/logo.png";

export const Section = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Window = styled.div`
  position: relative;
  display: block;
  width: 380px;
  height: 460px;
  padding: 28px 36px 36px 36px;
  background: ${(p) => p.theme.colors.primaryBgColor};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: ${(p) => p.theme.radius.normal};
  overflow: auto;
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

export const List = styled.ul``;
