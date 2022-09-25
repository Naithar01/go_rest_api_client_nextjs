import { GetServerSideProps } from "next";
import Link from "next/link";
import { Container_body } from "../../components/Layouts/styled/Container";
import { PageHeader } from "../../components/Layouts/styled/PageContent";
import PostList from "../../components/Post/PostList";
import {
  Post_Back_Category_list,
  Post_body,
} from "../../components/Post/styled/Post-styled";
import {
  GetAllPostList,
  GetAllPostListNoCategoryQuery,
  ResponsePost,
} from "../../Lib/Post";

type Props = {
  posts: ResponsePost[];
};

const MainPage = ({ posts }: Props) => {
  return (
    <Container_body>
      <PageHeader>Posts</PageHeader>
      <Link href="/">
        <Post_Back_Category_list>Category List</Post_Back_Category_list>
      </Link>
      {posts.map((post) => (
        <PostList key={post.id} post={post} />
      ))}
    </Container_body>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { category_id } = ctx.query as unknown as { category_id: number };

  if (category_id === null || category_id === undefined) {
    const res = await GetAllPostListNoCategoryQuery();

    const posts: ResponsePost[] = await res.json();

    return {
      props: { posts: posts },
    };
  }

  const res = await GetAllPostList(category_id);

  const posts: ResponsePost[] = await res.json();

  return {
    props: { posts: posts },
  };
};

export default MainPage;
