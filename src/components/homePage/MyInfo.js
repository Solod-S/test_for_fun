import { useSelector } from "react-redux";

import { getAccountInfo } from "../../redux/auth/authSelectors";

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

const MyInfo = () => {
  const myInfoInStorage = useSelector(getAccountInfo);
  console.log(myInfoInStorage, myInfoInStorage.user);
  return (
    <>
      <Banner />
      <Tittle>Wellcome back!</Tittle>

      <AvatarWrapper>
        <Avatar avatar={myInfoInStorage.avatar} />
      </AvatarWrapper>

      <Name>{myInfoInStorage.user}</Name>
      <Tweets>tweets: {myInfoInStorage.tweets}</Tweets>
      <Followers>followers: {myInfoInStorage.followers}</Followers>
      <LogOutBtn>Log out</LogOutBtn>
    </>
  );
};
export default MyInfo;
