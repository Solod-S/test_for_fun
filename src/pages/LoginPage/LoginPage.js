import { useDispatch } from "react-redux";

import { logIn } from "../../redux/auth/authOperation";

import { LogInBtn, Banner, Tittle } from "./LoginPage.styled";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(logIn());
  };

  return (
    <>
      <Banner />
      <Tittle>Please sign-up </Tittle>
      <LogInBtn onClick={handleLogIn}>Sign-up</LogInBtn>
    </>
  );
};
export default LoginPage;
