import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
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
import {
  GetAllPostListNoCategoryQuery,
  GetPostById,
  ResponsePost,
} from "../../Lib/Post";

interface IParams extends ParsedUrlQuery {
  id: string;
}

type ReadResponsePost = {
  id: number;
  content: string;
  category_id: number;
  category: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null;
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
        {post.tags && (
          <Read_Post_tags>
            <Post_Tag_body>tags:</Post_Tag_body>
            {post.tags.map((tag, i) => (
              <PostTags key={tag.length + i} tag={tag} />
            ))}
          </Read_Post_tags>
        )}
        <Read_Post_header>{post.content}</Read_Post_header>
      </Post_header>
    </Container_body>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GetAllPostListNoCategoryQuery();

  const posts: ResponsePost[] = await res.json();

  const paths = posts.map((post) => ({
    params: { postid: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { postid } = ctx.params as IParams;

  const res = await GetPostById(postid);

  const post: ReadResponsePost = await res.json();

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default ReadPost;
