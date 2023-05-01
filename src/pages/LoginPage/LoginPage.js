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
      <Tittle>Please log-in </Tittle>
      <LogInBtn onClick={handleLogIn}>log-in</LogInBtn>
    </>
  );
};
export default LoginPage;
