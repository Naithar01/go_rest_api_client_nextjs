import type { NextPage } from "next";
import styled from "styled-components";

const HelloWorld = styled.div`
  margin: 10px;
`;

const Home: NextPage = () => {
  return <HelloWorld></HelloWorld>;
};

export default Home;
