import { GetServerSideProps } from "next";
import CategoryList from "../components/Category/CategoryList";
import { Category_body } from "../components/Category/styled/Category-styled";
import { Container_body } from "../components/Layouts/styled/Container";
import { PageHeader } from "../components/Layouts/styled/PageContent";

import { GetAllCategoryList, ResponseCategory } from "../Lib/Category";

type Props = {
  categorys: ResponseCategory[];
};

const MainPage = ({ categorys }: Props) => {
  return (
    <Container_body>
      <PageHeader>Post Category</PageHeader>
      
      {categorys.map((category) => (
        <Category_body key={category.id}>
          <CategoryList category={category} />
        </Category_body>
      ))}
    </Container_body>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await GetAllCategoryList();

  const categorys = await res.json();

  return {
    props: {
      categorys,
    },
  };
};

export default MainPage;
