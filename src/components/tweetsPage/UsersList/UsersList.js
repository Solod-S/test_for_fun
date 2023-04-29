import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../shared/Loader/Loader";
import { UsersItem } from "../UsersItem/UsersItem";

import { fetchUsers } from "../../../redux/users/usersOperation";
import {
  getUsers,
  getUsersRefreshStatus,
} from "../../../redux/users/userSelectors";

import { Section, Window, Logo, List } from "./UsersList.styled";

export const UsersList = () => {
  const dispatch = useDispatch();
  const usersInStorage = useSelector(getUsers);
  const isRefreshing = useSelector(getUsersRefreshStatus);

  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers());
    setUsers(usersInStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setisLoading(isRefreshing);
  }, [isRefreshing]);

  return (
    <Section>
      <Window>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Logo />
            <List>
              {users.length > 0 &&
                users.map((user) => (
                  <UsersItem key={user.id} currentUser={user} />
                ))}
            </List>
          </>
        )}
      </Window>
    </Section>
  );
};
