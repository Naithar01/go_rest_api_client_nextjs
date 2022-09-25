import Link from "next/link";
import { Fragment } from "react";
import { ResponsePost } from "../../Lib/Post";
import {
  Post_a_tag,
  Post_body,
  Post_Content,
  Post_CreatedAt,
  Post_header,
} from "./styled/Post-styled";
import PostTags from "./tags/PostTags";

type Props = {
  post: ResponsePost;
};

const PostList = ({ post }: Props) => {
  const date = new Date(`${post.CreatedAt}`).toLocaleString();

  return (
    <Post_body>
      <Post_header>
        <Link href={`/post/${post.id}`}>
          <Post_a_tag>{post.content}</Post_a_tag>
        </Link>
      </Post_header>
      <Post_Content>
        <Post_CreatedAt>{date}</Post_CreatedAt>
        {post.tags &&
          post.tags.map((tag) => (
            <PostTags
              key={new Date().getTime() + Math.random() * 11}
              tag={tag}
            />
          ))}
      </Post_Content>
    </Post_body>
  );
};

export default PostList;
