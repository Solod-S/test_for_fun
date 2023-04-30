import { useSelector } from "react-redux";

import { getAccountInfo } from "../../../redux/auth/authSelectors";

import {
  Item,
  AvatarBorder,
  AvatarWrapper,
  Avatar,
  Title,
  TweetsCounterTitle,
  FollowersCounterTitle,
  TweetsCounter,
  FollowersCounter,
  NavigateTo,
} from "./UsersItem.styled";

export const UsersItem = ({ currentUser, location }) => {
  const myInfoInStorage = useSelector(getAccountInfo);

  const { user, avatar } = currentUser;

  return (
    <Item>
      <div style={{ flex: 0.5 }}>
        <AvatarBorder
          subscribed={currentUser.followersId.includes(myInfoInStorage.id)}
        >
          <AvatarWrapper>
            <Avatar avatar={avatar} />
          </AvatarWrapper>
        </AvatarBorder>
      </div>
      <div style={{ flex: 1.5 }}>
        <Title>
          {user.length > 15
            ? user.slice(0, 14).toLowerCase() + "..."
            : user.toLowerCase()}
        </Title>
        <TweetsCounterTitle>tweets:</TweetsCounterTitle>
        <TweetsCounter>
          {parseInt(currentUser.tweets).toLocaleString("en")}
        </TweetsCounter>
        <FollowersCounterTitle>followers:</FollowersCounterTitle>
        <FollowersCounter>
          {parseInt(currentUser.followers).toLocaleString("en")}
        </FollowersCounter>
      </div>
      <div style={{ flex: 0.5 }}>
        <NavigateTo to={`/tweets/${currentUser.id}`} state={{ from: location }}>
          open
        </NavigateTo>
      </div>
    </Item>
  );
};
