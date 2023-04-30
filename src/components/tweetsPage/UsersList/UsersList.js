import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Loader } from "../../shared/Loader/Loader";
import { UsersItem } from "../UsersItem/UsersItem";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";

import { fetchUsers } from "../../../redux/users/usersOperation";
import {
  getUsers,
  getUsersRefreshStatus,
} from "../../../redux/users/userSelectors";
import { getAccountInfo } from "../../../redux/auth/authSelectors";

import { List, Button } from "./UsersList.styled";

export const UsersList = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const usersInStorage = useSelector(getUsers);
  const myInfoInStorage = useSelector(getAccountInfo);
  const isRefreshing = useSelector(getUsersRefreshStatus);

  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [visibleUsersCount, setVisibleUsersCount] = useState(3);
  const [selectedOption, setSelectedOption] = useState({
    value: "show all",
    label: "show all",
  });

  useEffect(() => {
    dispatch(fetchUsers());
    setUsers(usersInStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (selectedOption.value === "show all") {
      setUsers(usersInStorage);
    } else if (selectedOption.value === "follow") {
      setUsers(
        usersInStorage.filter(
          (user) => !user.followersId.includes(myInfoInStorage.id)
        )
      );
    } else if (selectedOption.value === "followings") {
      setUsers(
        usersInStorage.filter((user) =>
          user.followersId.includes(myInfoInStorage.id)
        )
      );
    }
  }, [myInfoInStorage.id, selectedOption, usersInStorage]);

  useEffect(() => {
    setisLoading(isRefreshing);
  }, [isRefreshing]);

  const handleLoadMoreClick = () => {
    setVisibleUsersCount((count) => count + 3);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DropdownMenu
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
          <List>
            {users.slice(0, visibleUsersCount).map((user) => (
              <UsersItem key={user.id} currentUser={user} location={location} />
            ))}
          </List>
          {visibleUsersCount < users.length && (
            <Button onClick={handleLoadMoreClick}>Load more</Button>
          )}
        </>
      )}
    </>
  );
};
