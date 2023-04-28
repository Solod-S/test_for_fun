import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getUsers,
  getUsersRefreshStatus,
} from "../../redux/users/userSelectors";
import { fetchUsers } from "../../redux/users/usersOperation";

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
  const dispatch = useDispatch();
  const usersInStorage = useSelector(getUsers);

  const [users, setUsers] = useState([]);
  const [tweets, setTweets] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const [isFollowed, setisFollowed] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers());
    setUsers(usersInStorage);
  }, [dispatch]);

  console.log(users);

  // useEffect(() => {
  //   if (usersInStorage) {
  //     setTweets(usersInStorage[0].tweets);
  //   }
  // }, [usersInStorage]);
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
        <TweetsCounter>
          {/* {users && users[0] && users[0].tweets ? users[0].tweets : 0} tweets */}
        </TweetsCounter>
        <FollowersCounter>100,500 Followers</FollowersCounter>
        <Button isFollowed={isFollowed}>
          {isFollowed ? "Following" : "Follow"}
        </Button>
      </Window>
    </Section>
  );
};
