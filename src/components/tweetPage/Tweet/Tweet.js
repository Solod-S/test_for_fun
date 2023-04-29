import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../../shared/Loader/Loader";

import { updateFollower } from "../../../redux/users/usersOperation";
import { getUsers } from "../../../redux/users/userSelectors";
import { getAccountInfo } from "../../../redux/auth/authSelectors";

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
} from "./Tweet.styled";

export const Tweet = () => {
  const { tweetId } = useParams();
  const dispatch = useDispatch();

  const usersInStorage = useSelector(getUsers);
  const myInfoInStorage = useSelector(getAccountInfo);

  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setUser(usersInStorage.find((user) => user.id === tweetId));
    setisLoading(false);
  }, [tweetId, usersInStorage]);

  const handleClick = () => {
    let newUserData = null;
    if (!alreadyFollowed) {
      newUserData = {
        ...user,
        followers: (parseInt(user.followers) + 1).toString(),
        followersId: [...user.followersId, myInfoInStorage.id],
      };
    } else {
      newUserData = {
        ...user,
        followers: (parseInt(user.followers) - 1).toString(),
        followersId: user.followersId.filter((id) => id !== myInfoInStorage.id),
      };
    }

    dispatch(updateFollower(newUserData));
  };

  const alreadyFollowed = user && user.followersId.includes(myInfoInStorage.id);

  return (
    <Section>
      <Window>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Logo />
            <Banner />
            <Rectangle />
            <AvatarBorder />
            <AvatarWrapper>
              <Avatar avatar={user.avatar} />
            </AvatarWrapper>
            <TweetsCounter>
              {user.tweets ? parseInt(user.tweets).toLocaleString("en") : 0}{" "}
              tweets
            </TweetsCounter>
            <FollowersCounter>
              {user.followers
                ? parseInt(user.followers).toLocaleString("en")
                : 0}{" "}
              Followers
            </FollowersCounter>
            <Button onClick={handleClick} isFollowed={alreadyFollowed}>
              {alreadyFollowed ? "Following" : "Follow"}
            </Button>
          </>
        )}
      </Window>
    </Section>
  );
};
