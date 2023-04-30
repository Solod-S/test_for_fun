import { useSelector, useDispatch } from "react-redux";

import { getAccountInfo } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authSlice";

import {
  Banner,
  LogOutBtn,
  Tittle,
  Name,
  AvatarWrapper,
  Avatar,
  Tweets,
  Followers,
} from "./MyInfo.styled";
// logOut;
const MyInfo = () => {
  const dispatch = useDispatch();
  const myInfoInStorage = useSelector(getAccountInfo);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Banner />
      <Tittle>Wellcome back!</Tittle>

      <AvatarWrapper>
        <Avatar avatar={myInfoInStorage.avatar} />
      </AvatarWrapper>

      <Name>{myInfoInStorage.user}</Name>
      <Tweets>
        tweets:{" "}
        {myInfoInStorage.tweets
          ? parseInt(myInfoInStorage.tweets).toLocaleString("en")
          : 0}
      </Tweets>
      <Followers>
        followers:{" "}
        {myInfoInStorage.followers
          ? parseInt(myInfoInStorage.followers).toLocaleString("en")
          : 0}
      </Followers>
      <LogOutBtn onClick={handleLogOut}>Log out</LogOutBtn>
    </>
  );
};
export default MyInfo;
