import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Window = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 490px;
  padding: 0px 36px 28px 36px;
  background: ${(p) => p.theme.colors.primaryBgColor};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: ${(p) => p.theme.radius.normal};
  overflow: auto;
`;
