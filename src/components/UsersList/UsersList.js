import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UsersItem } from "../UsersItem/UsersItem";

import {
  getUsers,
  getUsersRefreshStatus,
} from "../../redux/users/userSelectors";
import { fetchUsers } from "../../redux/users/usersOperation";

import { Section, Window, Logo } from "./UsersList.styled";

export const UsersList = () => {
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

  // useEffect(() => {
  //   if (usersInStorage) {
  //     setTweets(usersInStorage[0].tweets);
  //   }
  // }, [usersInStorage]);
  return (
    <Section>
      <Window>
        <Logo />
        {users.length > 0 &&
          users.map((user) => <UsersItem key={user.id} currentUser={user} />)}
      </Window>
    </Section>
  );
};
