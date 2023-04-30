import { Abaut, Text, Link, LinkList, LinkItem } from "./About.styled";

export const About = () => {
  return (
    <>
      <Abaut>Abaut</Abaut>
      <Text>
        The test task that I completed uses React, Redux, and Redux-Thunks,
        styled-components and React Router DOM. This project also includes both
        public and private routes. Public routes are accessible to all users,
        while private routes require authentication and can only be accessed by
        logged-in users.
      </Text>
      <LinkList>
        <LinkItem>
          <Link href="https://github.com/Solod-S" target="_blank">
            Github
          </Link>
        </LinkItem>
        <LinkItem>
          <Link
            href="https://www.linkedin.com/in/serhii-solod-557991256/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </LinkItem>
      </LinkList>
    </>
  );
};
