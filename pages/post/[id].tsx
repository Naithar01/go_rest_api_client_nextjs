import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Container_body } from "../../components/Layouts/styled/Container";
import { PageHeader } from "../../components/Layouts/styled/PageContent";
import {
  Post_Back_Category_list,
  Post_header,
  Post_Tag_body,
  Read_Post_createAt,
  Read_Post_header,
  Read_Post_tags,
} from "../../components/Post/styled/Post-styled";
import PostTags from "../../components/Post/tags/PostTags";
import { GetAllPostList, GetPostById, ResponsePost } from "../../Lib/Post";

type ReadResponsePost = {
  id: number;
  content: string;
  category_id: number;
  category: {
    ID: number;
    title: string;
  };
  tags: string[];
  CreatedAt: string;
};

type Props = {
  post: ReadResponsePost;
};

const ReadPost = ({ post }: Props) => {
  return (
    <Container_body>
      <PageHeader>{post.category.title}</PageHeader>
      <Link href={`/post?category_id=${post.category_id}`}>
        <Post_Back_Category_list>Back Post List</Post_Back_Category_list>
      </Link>
      <Post_header>
        <Read_Post_createAt>
          {new Date(post.CreatedAt).toLocaleString()}
        </Read_Post_createAt>
        <Read_Post_tags>
          <Post_Tag_body>tags:</Post_Tag_body>
          {post.tags.map((tag, i) => (
            <PostTags key={tag.length + i} tag={tag} />
          ))}
        </Read_Post_tags>
        <Read_Post_header>{post.content}</Read_Post_header>
      </Post_header>
    </Container_body>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GetAllPostList(0);

  const posts: ResponsePost[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as unknown as { id: string };

  const res = await GetPostById(id);

  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};

export default ReadPost;
