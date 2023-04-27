import { useState, useEffect } from "react";

import {
  Section,
  Window,
  Logo,
  Banner,
  Rectangle,
  AvatarBorder,
  AvatarWrapper,
  Avatar,
  TweetsCounter,
  FollowersCounter,
  Button,
} from "./Tweets.styled";

export const Tweets = () => {
  const [isFollowed, setisFollowed] = useState(true);
  return (
    <Section>
      <Window>
        <Logo />
        <Banner />
        <Rectangle />
        <AvatarBorder />
        <AvatarWrapper>
          <Avatar avatar={false} />
        </AvatarWrapper>
        <TweetsCounter> 777 tweets</TweetsCounter>
        <FollowersCounter>100,500 Followers</FollowersCounter>
        <Button isFollowed={isFollowed}>
          {isFollowed ? "Following" : "Follow"}
        </Button>
      </Window>
    </Section>
  );
};
