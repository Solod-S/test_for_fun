import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { Loader } from "../../shared/Loader/Loader";

import { updateFollower } from "../../../redux/users/usersOperation";
import { getUsers } from "../../../redux/users/userSelectors";
import { getAccountInfo } from "../../../redux/auth/authSelectors";

import {
  Logo,
  Banner,
  Rectangle,
  AvatarBorder,
  AvatarWrapper,
  Avatar,
  TweetsCounter,
  FollowersCounter,
  Button,
  GoBackLink,
} from "./Tweet.styled";

export const Tweet = () => {
  const { tweetId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/tweets";
  const dispatch = useDispatch();

  const usersInStorage = useSelector(getUsers);
  const myInfoInStorage = useSelector(getAccountInfo);

  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setUser(usersInStorage.find((user) => user.id === tweetId));
    setTimeout(() => {
      setisLoading(false);
    }, 250);
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Logo />
          <Banner />
          <GoBackLink end="true" to={backLinkHref}>
            GO BACK
          </GoBackLink>
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
            {user.followers ? parseInt(user.followers).toLocaleString("en") : 0}{" "}
            Followers
          </FollowersCounter>
          <Button onClick={handleClick} isFollowed={alreadyFollowed}>
            {alreadyFollowed ? "Following" : "Follow"}
          </Button>
        </>
      )}
    </>
  );
};
