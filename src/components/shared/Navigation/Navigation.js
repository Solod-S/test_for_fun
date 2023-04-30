import {
  Header,
  NavigationBar,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Header>
      <NavigationBar>
        <NavigationList>
          <NavigationItem>
            <NavigationLink end="true" to="/">
              Home
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="tweets">Tweets</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationBar>
    </Header>
  );
};
