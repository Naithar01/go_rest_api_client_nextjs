import { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Layout_body = styled.div`
  margin: 0px 15px;
`;

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Layout_body>
      <Navbar />
      {children}
    </Layout_body>
  );
};

export default Layout;
