import { Post_Tag_body } from "../styled/Post.styled";

type Props = {
  tag: string;
};

const PostTags = ({ tag }: Props) => {
  return <Post_Tag_body>{tag}</Post_Tag_body>;
};

export default PostTags;
