import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Navigation } from "../Navigation/Navigation";
import { Section, Window } from "../Containers/Containers.styled";
export const SharedLayout = () => {
  return (
    <Section>
      <Window>
        <Navigation />
        <Suspense>
          <Outlet />
        </Suspense>
      </Window>
    </Section>
  );
};
