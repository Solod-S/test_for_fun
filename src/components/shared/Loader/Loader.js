import { DotLoader } from "react-spinners";

import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => (
  <LoaderWrapper>
    <DotLoader color="#36d7b7" size={130} />
  </LoaderWrapper>
);
