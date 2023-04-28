import {
  Logo,
  Item,
  AvatarBorder,
  AvatarWrapper,
  Avatar,
  Title,
  Button,
} from "./UsersItem.styled";

export const UsersItem = ({ currentUser }) => {
  const { user, avatar } = currentUser;

  return (
    <>
      <Item>
        <AvatarBorder>
          <AvatarWrapper>
            <Avatar avatar={avatar} />
          </AvatarWrapper>
        </AvatarBorder>
        <Title>
          {user.length > 9
            ? user.slice(0, 8).toLowerCase() + "..."
            : user.toLowerCase()}
        </Title>
        <Button>open</Button>
      </Item>
    </>
  );
};
