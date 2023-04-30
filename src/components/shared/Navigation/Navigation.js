import { useSelector } from "react-redux";

import {
  Header,
  NavigationBar,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./Navigation.styled";

export const Navigation = () => {
  const authPassed = useSelector((state) => state.auth.user.user);
  return (
    <Header>
      <NavigationBar>
        <NavigationList>
          <NavigationItem>
            <NavigationLink end="true" to="/">
              home
            </NavigationLink>
          </NavigationItem>
          {!authPassed && (
            <NavigationItem>
              <NavigationLink to="authentication">LogIn</NavigationLink>
            </NavigationItem>
          )}
          {authPassed && (
            <NavigationItem>
              <NavigationLink to="userpage">My </NavigationLink>
            </NavigationItem>
          )}
          {authPassed && (
            <NavigationItem>
              <NavigationLink to="tweets">Tweets</NavigationLink>
            </NavigationItem>
          )}
        </NavigationList>
      </NavigationBar>
    </Header>
  );
};
