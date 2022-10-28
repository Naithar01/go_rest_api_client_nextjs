import { GetServerSideProps } from "next";
import { Container_body } from "../../components/Layouts/styled/Container.styled";
import { PageHeader } from "../../components/Layouts/styled/PageContent.styled";
import { ResponsePost, SearchPostByContent } from "../../Lib/Post";

type Props = {
  posts: ResponsePost[];
  s_data: string;
};

const SearchPostDataPage = ({ posts, s_data }: Props) => {
  if (!s_data) {
    return (
      <Container_body>
        <PageHeader>검색어가 없습니다.</PageHeader>
      </Container_body>
    );
  }

  return (
    <Container_body>
      <PageHeader>
        <small>{s_data}</small>
      </PageHeader>
      {posts.map((post) => (
        <p key={post.id}>{post.content}</p>
      ))}
    </Container_body>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { s_data } = ctx.query;

  if (!s_data) {
    return {
      props: {
        test: null,
      },
    };
  }

  const res = await SearchPostByContent(s_data);

  const posts: ResponsePost[] = await res.json();

  return {
    props: {
      posts: posts,
      s_data,
    },
  };
};

export default SearchPostDataPage;
